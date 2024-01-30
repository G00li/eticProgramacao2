import Animal from "./Animal.js";


export default class Reptile extends Animal{

    #isAgressive;  


    constructor({name, isAgresive,image}, callback){
        super(name,image, callback); 

        this.#isAgressive = isAgresive; 
    }

    bite(){
        return this.#isAgressive ? 
        this.introduce() + " and I'm agressive": 
        this.introduce() + " and I'm pacefull";
    }
}