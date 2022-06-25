//any -- O RETORNO

let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTeste: string = 'verificar';
stringTeste = anyEstaDeVolta;

//como já visto, é possivel atribuir um tipo incorreto utilizando a tipagem "any"
//por outro lado, com o unknown:

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'vai sim';

let stringTeste2: string = 'agora vai';
// stringTeste2 = unknowValor; //uma excessão será levantada: é preciso primeiro testar o tipo da variavel unknown para poder fazer a atribução

if(typeof unknowValor === 'string'){
    stringTeste2 = unknowValor;
}