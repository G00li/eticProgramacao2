import Car from "./car.js";
import Boat from "./Boat.js";
import Motorcycle from "./motorcycle.js";

let currentVehicle;

// const data = {
//     Cars:[{
//         brand: "Ferrari",
//         speed: 200,

//     },
//     {
//         brand: "Fiat",
//         speed: 50,
//     },
//     ],
//     Motorcycle:[{
//         brand:  "Ducatti",
//         speed: 300,

//     }, 
//     {
//         brand: "Kawasaki",
//         speed: 500,
//     },
//     ],

//     Boat:[{ //O nome é importante está igual o da função. 
//         brand: "Cabin Cruisers",
//         speed: 150,

//     },
//     {
//         brand: "Dinghy",
//         speed: 300,
//     },
//     ],
// };

// const vehicles = []

// window.onload = () => {
//     console.log("window loaded");
//     const navList = document.querySelector(".menu-nav"); // querySelectorAll( )[x] caso queira selecionar a posição do index no array 
//     // O .menu-nav representa a busca id do nav do html. Se for buscar por classe, teria que trocar o . por # e escrever a classe 
  
//     // console.log(navList);

//     // =========== CRIANDO LISTAS DINAMICAMENTE ============= 



//     const creatUL = (name, data) => { //Criando uma [lista "Unsorted List" (UL)] para termos a lista de brand de Car, Motocycle, bike, boat... 
//         const ul = document.createElement("ul");
//         const title = document.createElement("li");
//         title.innerText = name; //InnerText pega apenas a parte importante do texto. Respeitando as quebras de linhas e mantendo a formatação
//         ul.appendChild(title); //Basicamente reconhece o nome da classe (Car, Motocycle, Boat) e cria uma nova lista com o titulo 

//         data.forEach((element) => { //Populando cada lista com seus elementos. Basicamente cada lista receberá os seus devidos conteudos de forma dinamica
//             const li = document.createElement("li");
//             const button = document.createElement("button");
//             button.onclick = (event) => {
//                 switch (name){
//                     case "Cars":
//                         vehicles.push(new Car(element));
//                         break;
//                     case "Motorcycle":
//                         vehicles.push(new Motorcycle(element));
//                         break;
//                     case "Boat": 
//                         vehicles.push(new Boat(element)); 
//                         break;

//                         default:
//                             break
//                 }
//                 console.log(vehicles);
//             }

//             button.innerText = element.brand;
//             li.appendChild(button);
//             ul.appendChild(li);
            
//         });

//         navList.appendChild(ul); //Insere um filho (data[key]) dentro do NavList, que é a nav do html.
//     };

//     // creatUL();
    
//     // build layout
//     for(const key in data){
//         // console.log(key);
//         creatUL(key, data[key]); //Cada key (Car,motocycle) dentro do objeto "data" vai virar uma lista. Onde "key" (Car, motocycle) seria o nome e "data[key]" seria o valor (Ferrari, Fiat...)
//     }
// }


// // ================= //================


// // const car = new Car();
// // const motorcycle = new Motorcycle();


//


//=





//

// Função Generica 




const loadData = async (url) => { //Função assincrona - So apresenta para o usuário depois de ter carregado tudo 
    
    const request = await fetch(url); //fetch vai fazer com que carreguemos ficheiros fora do programa. neste caso é um ficheiro interno 
    const result = await request.json(); 

    return result;


}

const createLiContent = (item) => {

    const button = document.createElement("button");
    button.innerText = item.brand;

    button.onclick = () => {
        if(playButton.className === "inactive"){
            playButton.className = "";
        }
        
        if(currentVehicle){ //verifica se existe um veiculo dentro da variavel currentVehicle. se existir ele exclui e exibe o novo após apertar o botao

            currentVehicle.destroy();
        }
        
        switch (item.type){
            case "Car": 
                currentVehicle = new Car (item);
                break;
            
            case "Motorcycle": 
            currentVehicle = new Motorcycle(item); 
                break;

            case "Boat":
                currentVehicle = new Boat(item);
            break;
        }

    }
    
    return button;

}

const creatList = (data) => {

    const ul = document.querySelector("ul");

    // !!!!!!!!!!!!! CRIANDO ITENS (LI) DINAMICAMENTE 
    data.forEach(item => {
        const li = document.createElement("li");
        li.appendChild(createLiContent(item));
        ul.appendChild(li);

        // console.log(item); //Busca item a item e apresenta no console do browser de forma dinamica 
    });

}


// ------------------------- PLAY/PAUSE BUTTON ----------------------

// ______________________________________________________________________________________

// let isPlaying = null; //variavel para fazer o play/pause button 
// let playButton;

//  !!!!!!!!!!!!!!!!! MODO ANTIGO CONTROLANDO A VELOCIDADE DA ANIMAÇÃO !!!!!!!!!!!!!!!!! 
// Consegue definir em quantos milissegundos quer um frame


// const play = () => {
//     isPlaying = setInterval(() => { //Consegue controlar a velocidade da animação

//         console.log("new animation frame");
//     }, 1000);
//     playButton.innerText="Stop"; //Trocando o texto do botão para stop 
//     playButton.className = "red";

// }
// const stop = () => {
//     clearInterval(isPlaying);
//     isPlaying = null; 
//     playButton.innerText="Play";
//     playButton.className = "green";
// }

// ______________________________________________________________________________________ 

// !!!!!!!!!!!!!!!!!! MODO MAIS ATUAL DE FAZER ANIMAÇÃO !!!!!!!!!!!!!!!!!!!! 
// Mantem sempre 60 fps (frames por segundos)

let isPlaying = null; //variavel para fazer o play/pause button 
let playButton;

const animate = () => { 

    currentVehicle.animate();
    isPlaying = requestAnimationFrame(animate);
}

const playAnimation = () =>{

    isPlaying = requestAnimationFrame(animate);
    playButton.innerText = "Stop";
    playButton.className = "red";

}

const stopAnimation = () => {

    cancelAnimationFrame(isPlaying);
    isPlaying = null; 
    playButton.innerText = "Play";
    playButton.className = "green";


}


// ---------------------------------- WINDOW ---------------------------------

// window.onload = async () => { //Função assincrona 

//     const data = await loadData ("data.json"); //Se nao por AWAIT ele carrega e fica como "pending (promise)" 
    
//     data.sort((a,b) => a.type.localeCompare(b.type)); // Função para ordenar um array de forma alfabética. Onde o "a" é o item original e o "b" é o item a seguir 
 
//     const ul = creatList(data);
// }

// ======================= OUTRA MANEIRA DE FAZER O WINDOW.ONLOAD (da no mesmo) ==============================

window.addEventListener("load",async () => { //Adicionando o window.onload de outra forma (EVENTO)
    
    const data = await loadData ("data.json");     
    data.sort((a,b) => a.type.localeCompare(b.type)); 

    const ul = creatList(data);


    playButton = document.querySelector("#play_pause");
    playButton.onclick = () =>{
       isPlaying ? stopAnimation() : playAnimation();
    }
})





//  =============== IMPORTANTE  ===============

// document.querySelector("ul") -> document.creatElement("li") --> ul.appendChild(li);  

//   =============== FIM DO IMPORTANTE ===============
