import Zoo from "./Zoo.js"; 

window.onload = async () => {

    console.log(Zoo.ZooInfo());

    const request = await fetch("data.json"); 
    const result = await request.json();



    // =========== ZOO ==============
    const zoo = new Zoo(() =>{
        console.log("zoo event"); 
    }); 

    result.forEach(item => {
        zoo.addAnimal(item); 
    });
    // zoo.showAnimals(); 

   const chicken = zoo.getAnimal("dog");

   console.log(chicken); 
}