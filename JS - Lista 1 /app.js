window.onload = () => {
    /**
     * -- Declaração e Manipulação de Variáveis --
     * Declara duas variáveis, (a , b) e atribui-lhes um valor.
     * Troca os valores de a e b sem usar uma variável temporária.
     * Faz console.log dessas 2 variáveis.
     */

    // let a = 5;
    // let b = 10; 

    // console.log("Antes da troca")
    // console.log("Variavel 'a': ", a); 
    // console.log("Variavel 'b': ", b); 

    // [a , b] = [b , a]; 

    // console.log("Depois da troca")
    // console.log("Variavel 'a': ", a); 
    // console.log("Variavel 'b': ", b);   




    /**
     * -- Instruções Condicionais --
     * Escreve uma função (isEven, por ex.) que recebe um parâmetro numérico.
     * O resultado dessa função verifica se o número é par ou ímpar.
     * Faz console.log desse resultado.
     */

    // let a = 13; 

    // ParImpar(a); 




    /**
     * -- Arrays --
     * Escreve uma função que recebe um array de 5 números (por ex: [2, 123, 34, 65, 48]).
     * Itera sobre esse array e faz console.log apenas dos números pares.
     */

    // const arr = [2, 123, 34, 65, 48];
    // printPar(arr); 


    


    /**
     * -- Funções --
     * Escreve uma função que recebe dois parâmetros, num1, num2, e retorna a soma deles.
     * Faz console.log desse resultado.
     */

    // let num1 = 120; 
    // let num2 = 30; 

    // console.log("A soma é: ", somaNumbers(num1, num2));



    /**
     * -- Objetos --
     * Cria um objeto que represente uma pessoa com as  propriedades nome, idade e genero.
     * Faz console.log dessas propriedades.
     */

// Precisei de ajuda

    // let pessoa = new Pessoa ('Leandro', 24, 'Masculino'); 
    // console.log(pessoa);


    /**
     * -- Loops --
     * Escreve um for loop que imprime a sequência de Fibonacci até um número específico de items (10, por ex.).
     * Faz console.log a cada iteração.
     */

    // SEQUENCIA DE FIBONACCI = 0, 1, 1, 2, 3, 5, 8, 13, 21

    // let a = 0 
    // let b = 1
    // let c = a+b; 

    // console.log (a);
    // console.log (b);
    // console.log (c);

    // for (let i =0; i<=5; i++){
    //     a = b; 
    //     b = c; 
    //     c = a+b; 

    //     console.log(c); 
    // }
    


    /**
     * -- Manipulação do DOM --
     * No ficheiro index.html, cria dois elementos do tipo <button> e <p> dentro do  <body>.
     * Cria um evento onclick no botão que quando “clicado”, insere o texto “button clicked” no elemento <p>.
     */

    // const button = document.querySelector("button"); 
    // console.log(button); 
    // const tittle = document.createElement("p"); 
    // tittle.innerText = "Click Here"; 
    // button.appendChild(tittle);

    // button.onclick = () => {
    //     tittle.innerText="Button Clicked"
    //     button.appendChild(tittle); 
    // }


    /**
     * -- Async/Await e Fetch --
     * Cria uma função (loadData, por ex) que faça fetch do ficheiro “data.json”
     * e transforme o resultado desse fetch em formato json.
     * Faz console.log desse json.
     */

    // loadData();

}


// const ParImpar = (num) => {

//     if (num%2 == 0){
//         console.log("o numero " + num + " é par!")
//     }
//     else{
//         console.log("O número " + num + " é impar")
//     }
// }


// const printPar = (d) => {
//     d.forEach(element => {
//         if(element % 2 == 0){
//             console.log(element);
//         }
//     });
// }


// const somaNumbers = (x , y) =>{
//     return x+y; 
// }



// class Pessoa {
//     constructor (nome, idade, genero) {
//         this.nome = nome;
//         this.idade = idade; 
//         this.genero = genero; 
//     }    
//     apresentacao () {
//         console.log(`Olá meu nome é ${this.nome}, tenho ${this.idade} anos e sou do sexo ${this.genero}`)
//     }
// }

// const loadData = async () => {
//     const request = await fetch ("data.json"); 
//     const result = await request.json(); 

//     console.log(result);
// }