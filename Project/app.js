import ArtPiece from "./ArtPiece.js";
import Gallery from "./Gallery.js";


window.onload = async () => {

    const request = await fetch("data.json");
    const result = await request.json();

    const artName = document.querySelector("#name-art"); 
    const description = document.querySelector("#description-text"); //Description Art
    const artist = document.querySelector("#name"); 
    const location = document.querySelector("#location")
    const button = document.querySelector("#moreInfo")

    const gallery = new Gallery( (data) => {

        console.log (data);
        artName.innerText = data.title;
        description.innerText = data.history; //informa a descrição da imagem
        artist.innerText = data.artist; //Informa o nome do artista
        location.innerText = data.location; // Passa a location da imagem em específico
    }); 


    result.forEach(element => {
        gallery.addItem(element);
    });

    gallery.paintingArt(); 
    
    button.addEventListener('click', function() {
        var div = document.getElementById('moreInfDiv');
        if (div.style.display === 'none') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}