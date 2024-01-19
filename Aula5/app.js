import Car from "./car.js";
import Motorcycle from "./Motorcycle.js";

const data = {
    Cars:[{
        brand: "Ferrari",
        speed: 200,

    },
    {
        brand: "Fiat",
        speed: 50,
    },
],
    Motorcycle:[{
        brand:  "Ducatti",
        speed: 300,

    }, 
    {
        brand: "Kawasaki",
        speed: 500,
    },
],

    Boats:[{
        brand: "Cabin Cruisers",
        speed: 150,

    },
    {
        brand: "Dinghy",
        speed: 300,
    },],
};


const vehicles = []

window.onload = () => {
    console.log("window loaded");
    const navList = document.querySelector(".menu-nav"); // querySelectorAll( )[x] caso queira selecionar a posição do index no array 
    // O .menu-nav representa a busca id do nav do html. Se for buscar por classe, teria que trocar o . por # e escrever a classe 
  
    // console.log(navList);

    // =========== CRIANDO LISTAS DINAMICAMENTE ============= 



    const creatUL = (name, data) => { //Criando uma [lista Unsorted List (UL)] para termos a lista de brand de Car, Motocycle, bike, boat... 
        const ul = document.createElement("ul");
        const title = document.createElement("li");
        title.innerText = name;
        ul.appendChild(title);

        data.forEach((element, index) => { //Populando cada lista com seus elementos. Basicamente cada 
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.onclick = (event) => {
                switch (name){
                    case "Cars":
                        vehicles.push(new Car(element));
                        break;
                    case "Motorcycle":
                        vehicles.push(new Motorcycle(element));
                        break;
                    case "Boat":  //ANCHOR - Criar uma função boat
                        break;

                        default:
                            break


                }
                console.log(vehicles);
      

            }
            button.innerText = element.brand;
            li.appendChild(button);
            ul.appendChild(li);
            
        });

        navList.appendChild(ul); //Insere um filho (data[key]) dentro do NavList, que é a nav do html.
    };

    // creatUL();
    
    // build layout
    for(const key in data){
        // console.log(key);
        creatUL(key, data[key]); //Cada key (Car,motocycle) dentro do objeto "data" vai virar uma lista. Onde "key" (Car, motocycle) seria o nome e "data[key]" seria o valor (Ferrari, Fiat...)
    }
}


// ================= //================


// const car = new Car();
// const motorcycle = new Motorcycle();