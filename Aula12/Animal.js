export default class Animal {

    #name;
    #callback;
    #imagemElem; 

    constructor ({name, image}, callback){
        this.#name = name;
        this.#callback = callback; 

        this.#imagemElem = document.createElement("img");
        this.#imagemElem = image; 

       this.#imagemElem.onclick = () => this.#callback(); 
        const container = document.querySelector("#images-container");
        container.appendChild(this.#imagemElem); 
    }

    introduce(){
        return "Hello, I'm a " + this.#name; 
    }

    get name () {
        return this.#name; 
    }

    set name(value){
        this.#name = value; 
    }

    get active() {

        return this.#imagemElem.className.length !== 0; 
    }

    set active(value){
        this.#imagemElem.className = value ? 'active' : '';
    }
}