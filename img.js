<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galerie Interactive</title>
    <style>
        #image {
            width: 300px;
            height: 200px;
            background-color: #f0f0f0;
            text-align: center;
            line-height: 200px;
            font-size: 20px;
            color: #888;
            background-size: cover;
            background-position: center;
        }
        .thumbnail {
            width: 100px;
            height: 75px;
            margin: 10px;
            cursor: pointer;
            transition: transform 0.3s;
        }
        .thumbnail:hover {
            transform: scale(1.1);
        }
    </style>
</head>
<body>

<div id="image">Survolez une image ci-dessous pour l'afficher ici</div>

<!-- Galerie d'images -->
<div id="gallery">
    <img src="image1.jpg" alt="Image 1" class="thumbnail" onmouseover="upDate(this)" onmouseout="restore()">
    <img src="image2.jpg" alt="Image 2" class="thumbnail" onmouseover="upDate(this)" onmouseout="restore()">
    <img src="image3.jpg" alt="Image 3" class="thumbnail" onmouseover="upDate(this)" onmouseout="restore()">
    <!-- Ajoutez autant d'images que vous le souhaitez -->
</div>

<script>
    // Fonction qui se déclenche lors du passage de la souris sur une image
    function upDate(previewPic) {
        console.log("Survol de l'image déclenché");

        // Log de l'image actuelle
        console.log("Image source : " + previewPic.src);
        console.log("Image alt : " + previewPic.alt);

        // Mettre à jour l'image de fond de la div avec id 'image' avec la source de l'image survolée
        document.getElementById("image").style.backgroundImage = `url(${previewPic.src})`;

        // Mettre à jour le texte de la div avec l'alt de l'image
        document.getElementById("image").innerText = previewPic.alt;
    }

    // Fonction qui se déclenche lorsque la souris quitte l'image
    function restore() {
        console.log("La souris a quitté l'image");

        // Rétablir l'image de fond à une valeur vide
        document.getElementById("image").style.backgroundImage = "url('')";

        // Réinitialiser le texte par défaut de la div
        document.getElementById("image").innerText = "Survolez une image ci-dessous pour l'afficher ici";
    }
</script>

</body>
</html>
