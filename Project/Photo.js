import ArtPiece from "./ArtPiece.js";

export default class Photo extends ArtPiece{

    #camera; 
    constructor (data){
        super(data); 
        this.#camera = data.details; 

    }

    get camera (){
        return this.#camera;
    }

    set camera (value){
        this.#camera = value; 
    }
}