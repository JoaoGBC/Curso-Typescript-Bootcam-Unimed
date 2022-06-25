let valorAny: any;
valorAny = 3;
valorAny = 'ola',
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;
console.log(typeof valorString);


//em geral, o any não deve ser utilizado - CLARO QUE HÁ CASOS EM QUE SE PODE UTILIZAR
//Mas deve-se considerar uma má pratica a utilização sem justificativa do mesmo.