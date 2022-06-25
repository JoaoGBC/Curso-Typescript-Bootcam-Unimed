// //tipagem de retorno de funções

// //dada uma determinada função, há unica forma de garantir que uma função
// //retornará o tipo desejado é tipar a mesma (não no sentido dos seus parametros)
// //ex: a função abaixo deveria retornar um numero, mas como não está tipada,
// //a mesma irá retornar uma string:

// function somarValoresNumericos(numero1: number, numero2: number){
//     return numero1 + numero2.toString();
// }

// console.log(somarValoresNumericos(1,2));

// //a forma de garantir que a mesma irá retornar o tipo correto é:
// //function nomeDaFuncao(args:types):type

function somarValoresNumericos(numero1: number, numero2: number):number{
    //return numero1+numero2.toString(); não é mais possivel
    return numero1 + numero2;
}

console.log(somarValoresNumericos(1,2));


// //ainda é possivel retornar mais de um tipo, mas de forma intencional:

// function somarValoresNumericos(numero1: number|string, numero2: number|string):number | string{
//     if(typeof numero1 === 'string' || typeof numero2 === 'string'){
//         return numero1.toString() + numero2.toString();
//     }else{
//         return numero1 + numero2;
//     }
    
// }

// console.log(somarValoresNumericos(1,2));
// console.log(typeof somarValoresNumericos(1,2) );

// console.log(somarValoresNumericos('1',2));
// console.log(typeof somarValoresNumericos('1',2) );

// //há ainda a possibilidade de uma função do tipo void, que explicita que a função
// //em questão não deve retornar (e não retornará de fato) nenhum valor ou tipo

function printaValoresNumericos(numero1:number, numero2:number):void {
    console.log(numero1+numero2);    
}

printaValoresNumericos(1,2);
console.log(typeof printaValoresNumericos(1,2));
