//incluido callbacks
//especifica a topologia de uma função que será executada quando chamada por outra função
//a função que será chamada dentro da outra é passada para a primeira como argumento, e sem consumir nenhum tipo de argumento quando está sendo passada.

function somarValoresNumericos(numero1:number,numero2:number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number{
    return numero * numero;
}

function dividirPorEleMesmo(numero: number): number{
    return numero/numero;
}

console.log(somarValoresNumericos(2,2, aoQuadrado));
console.log(somarValoresNumericos(2,2,dividirPorEleMesmo));
