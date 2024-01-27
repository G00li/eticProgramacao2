console.log("Fora do window.onload")


window.onload = () => {

 console.log("Dentro do window.onload")   
 console.log("Resultado Soma: ", resultSoma);
 console.log("Resultado Multiplicação: ", resultmult); 
 console.log("Dobro da função 1: ", (resultSoma*2))
 console.log("Resultado Multiplicação de funções: ", resultMultFunc);
 console.log(result4);

}

const addNumbers = (a,b) => {
    let soma = a + b; 
    
    return soma
}


const resultSoma = addNumbers(2,4); 


const mult = (c,d) => {
    return c*d; 
}

const resultmult = mult(2, 5); 


const multiplyFunc = (func1, func2) => {
    return resultSoma*resultmult;
}

const resultMultFunc = multiplyFunc(resultSoma,resultmult)

const arr = [2, 45, 34, 2]; 

const mediaArray = (nums) => {
    let valor = 0; 
    
    nums.forEach(num => {
        valor+=num;
    });

    return valor/nums.length; 
}

const result4= mediaArray(arr);



//  - ----------------- 

const arr2 = [1, 2, 3, 4, 5, 6]

    
    arr2.forEach(Element => {
        console.log(Element)
    });



class Test{
    constructor(){

    }

    showNumber (){
        return 2; 
    }
}

const test = new Test(); 

console.log(test.showNumber()); 