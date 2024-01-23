export default class Vehicle {
    speed = 10;
    brand;
    imagePath;

    #image;
    #yPos = 0; // posição Y


    constructor(data){
        this.speed = data.speed;
        this.brand = data.brand;
        this.imagePath = data.image; 

        this.build (); 
    }

    animate() {
        this.#yPos += 0.1;
        console.log(this.#yPos);
        this.#image.style.transform = `translateY(${this.#yPos}px)`; //Injetando variavel em uma string através do ${ }. APENAS PERMITIDO COM A UTILIZAÇÃO DE ``
    }

    build() { //salva o arquivo jpg em uma variavel img e acrescenta no body.html
        this.#image = document.createElement("img");
        this.#image.src = this.imagePath;

        document.body.appendChild(this.#image);
    }

    destroy(){ //destroi a imagem para que, quando clicar em outro botão, nao fique 2 imagens 
        document.body.removeChild(this.#image);

    }
}