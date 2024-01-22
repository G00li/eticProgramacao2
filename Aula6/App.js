import Car from "./car.js";
import Boat from "./Boat.js";
import Motorcycle from "./motorcycle.js";

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
        switch (item.type){
            case "Car": 
                new Car (item);
                break;
            
            case "Motorcycle": 
                new Motorcycle(item); 
                break;

            case "Boat":
                new Boat(item);
            break;
        }
    }

    // console.log(item); 
    
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

window.onload = async () => { //Função assincrona 

    const data = await loadData ("data.json"); //Se nao por AWAIT ele carrega e fica como "pending (promise)" 
    
    data.sort((a,b) => a.type.localeCompare(b.type)); // Função para ordenar um array de forma alfabética. Onde o "a" é o item original e o "b" é o item a seguir 
 
    const ul = creatList(data);

}

//  =============== IMPORTANTE  ===============

// document.querySelector("ul") -> document.creatElement("li") --> ul.appendChild(li);  

//   =============== FIM DO IMPORTANTE ===============
