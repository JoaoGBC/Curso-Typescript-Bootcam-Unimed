let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;
let button = document.getElementById("button");


function adicionarNumero(numero1:number, numero2:number, printar:boolean, frase:string){
    let resultado: number = numero1 + numero2;
    if(printar){
        console.log(frase + resultado);
    }
    return resultado;
    
}

let devePrintar = true;
let frase = 'O resultado é: ';

if(button){
    button.addEventListener('click', () => {
        console.log(adicionarNumero(Number(input1.value),Number(input2.value), devePrintar, frase));
    })
}
//teste