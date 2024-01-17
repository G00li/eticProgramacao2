
// let a = 40

// if (a===10)
//     console.log(true)

// else
//     console.log(false)


// a =="10" ? console.log(true): console.log(false); 


// switch(a){
//     case 10:
//         console.log("é 10");
//         break;
//     case "10": 
//         console.log(true);
//         break; d
//     case "20": 
//         console.log("é 20");
//         break; 
//     case 100-60: 
//         console.log("numero 40"); 
//         break; 
//     default:
//         console.log(false)

// }

 
// ======================== REPETIÇÃO ============================


// ======================== While ============================
// let a = 0; 

// while (a < 20){
//     console.log(a);
//     a++;
// }

// let arr =["Praia", "Cidade", "Campo", "Floresta", "Montanha", 10, 100]; //array em javaScript nao é tipado


// ======================== For  ============================

// for (let i = 0; i<=length; i++){
//     console.log(arr);
// } DESSA FORMA ELE APRESENTA O ARRAY E O SEU TAMANHO (INTERESSANTE)


// const PI = 3.14; 
 let arr = [20, 30, 40, 10, 100];

// console.log(arr)

// for(let i =arr.length-1; i>= 0; i--){
//     arr[i]= arr[i] * PI; 
// }

// console.log(arr)

// ======================== For Each ============================

// arr.forEach((element) => {
//     console.log(element);
// });


// ======================== For In ============================

let obj ={
    name: "Leandro",
    age: 24,
    gender: "Male",
}

console.log(obj["gender"]);

for (const key in obj) {
    // console.log(obj[key]);
}