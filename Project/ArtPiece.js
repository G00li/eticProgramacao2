export default class ArtPiece{

    #type;
    #title;
    #artImage;
    #description
    #data;
    #text1


    constructor (data) {

        this.#data = data; 

        this.#type = data.type;
        this.#title = data.title; 
        this.#description = data.history; 
        this.#text1 = data.detail


        //  Corpo da imagem 
        this.#artImage = document.createElement("img");
        this.#artImage.src = data.image;
        this.#artImage.className = "art";

        // Corpo da descrição (history)
        this.#description = document.querySelector("p"); 
        this.#description.innerText = data.history;


    }

    infoHistory (){
        return this.#description; 
    }


    get name(){
        return this.#title; 
    }

    set name(value){
        this.#title = value;
    }



    get description (){
        return this.#description; 
    }

    set description(value){
        this.#description = value; 
    }



    get view (){
        return this.#artImage;
    }
    get data (){
        return this.#data;
    }



    get detail(){
        return this.#text1
    }
    set detail (value){
        this.#text1 = value; 
    }

}