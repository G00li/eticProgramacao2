import ArtPiece from "./ArtPiece.js";
import Graphite from "./Graphite.js";
import Painting from "./Painting.js"; 
import Photo from "./Photo.js"; 
import Sculpture from "./Sculpture.js"; 

export default class Gallery{

    view; 
    currentArtIndex = 0;
    artPieces= []; 
    callback;
    description; 


    constructor (callback) {
        this.callback = callback; 

        this.view = document.querySelector("#image-container");
        console.log(this.view); //Bonus
      
        
      
        document.querySelector("#button1").onclick = () => {
            this.currentArtIndex--;
            if(this.currentArtIndex < 0){
                this.currentArtIndex = this.artPieces.length-1;
            }

            this.paintingArt(); 
        }

        document.querySelector("#button2").onclick = () => {
            this.currentArtIndex++;
            if(this.currentArtIndex >= this.artPieces.length){
                this.currentArtIndex = 0;
            } 
            this.paintingArt();
        }

        const moreInfoButton = document.querySelector("#moreInfo");
        
        // moreInfoButton.addEventListener('click', () => {
        //     const currentArt = this.artPieces[this.currentArtIndex];
        //     const detail = currentArt.data.detail;

        //     console.log(detail);


        //     const detail1 = document.querySelector("#detail1");
        //     detail1.innerText = detail;
        // });


    }

    get currentItem(){
        return this.artPieces[this.currentArtIndex]; 
    }


    
    paintingArt (){
        this.view.innerHTML = "";
        this.view.appendChild(this.artPieces[this.currentArtIndex].view);
        this.callback(this.artPieces[this.currentArtIndex].data);
    
        const currentArt = this.artPieces[this.currentArtIndex];
        const detail1 = document.querySelector("#detail1");
        detail1.innerText = currentArt.data.detail;
    }


    addItem(item){
        let artPiece;
        
        switch (item.type) {
            case "painting":
                artPiece = new Painting(item, () => {
                    console.log("paiting");
                })
                break;
            case "sculpture":
                artPiece = new Sculpture(item, () => {
                    console.log("Sculpture");
                })
            
               break;
            case "Graphite":
                artPiece = new Graphite(item, () => {
                    console.log("Graphite");
                })
            
                break;
            case "photo":
                artPiece = new Photo(item, () => {
                    console.log("Photo");
                })
            
            break;
        }
        this.artPieces.push(artPiece)

    }

}