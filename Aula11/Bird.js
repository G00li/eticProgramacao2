import Animal from "./Animal.js"

export default class Bird extends Animal {

    #canFly; 
    constructor({name, canFly, image}, callback){ //Com os parametros entre {}, o construtor busca dentro do "item" no switch case apenas esses parametros. O "item" carrega todo o conteudo da classe Bird. 
        super(name, image, callback); //chama o construtor da classe pai 

        this.#canFly = canFly; 
    }

    fly() {


        return this.#canFly ? 
        this.introduce() + " and I can fly": 
        this.introduce() + " and I can't fly :(";
    }
}