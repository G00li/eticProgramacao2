// window.onload = () => {
//     const func = (obj) => {
//         obj.name = "Joana"; 
//         return name; 
//     }

//     const obj = {
//         name: "bruno"
//     }
 
//     console.log(obj); 
//     func (obj)
//     console.log(obj); 
// }

window.onload = () => {

    const test = new Test ((value) => {
        h1.innerText = value; 
    });

    test.setName("Test 1"); 

    test.width = 100; 
    test.height = 150; 
    test.background = "red"; 

    const h1 = document.querySelector("h1"); 

    const test2 = new Test2 (() =>{
        h1.innerText = "Teste 2 Clicked"; 
    })

    test2.width = 200; 
    test2.height = 100; 
    test2.background = "blue"; 

}

class Test{
    #name; 
    #age;
    #gender; 

    #view
    #callback; 

    constructor (callback){

        this.#callback = callback; 

        this.#view = document.createElement("div"); 
        // this.#view.className = "view"; 
            this.#view.onclick = () =>{
                this.#callback(this.#name + " Clicked");
            }
        document.body.appendChild(this.#view);
    }




    getName () {
        return this.#name; 
    }
    getAge () {
        return this.#age; 
    }
    getGender () {
        return this.#gender; 
    }

    setName(value){
        this.#name = value
    }
    setAge(value){
        this.#age = value
    }
    setGender(value){
        this.#gender = value
    }


//Por questão de boa prática, os getters e os setters ficam no final da classe. 
    get width (){
        return this.#view.style.width.replace("px", "");  
    }
    set width (value){
        this.#view.style.width = value + "px";
    }


    get height (){
        return this.#view.style.height.replace("px", "");  
    }
    set height (value){
        this.#view.style.height = value + "px";
    }

    get background () {
        return this.#view.style.backgroundColor;
    } 
    set background(value){
        this.#view.style.backgroundColor = value; 
    }
}

class Test2 {

        #view2; 

    constructor(callback){

        this.#view2 = document.createElement("div"); 
        this.#view2.onclick = (callbalck2) => {
            callback ("Clicked Test2"); 

        }

        document.body.appendChild(this.#view2); 

    }

    set width (value){
        this.#view2.style.width = value + "px";
    }

    set height (value){
        this.#view2.style.height = value + "px";
    }

    set background (value){
        this.#view2.style.backgroundColor = value; 
    }
    
}
