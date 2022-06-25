function jogaErro(erro:string,codigo:number):never {
    throw{error: erro, code: codigo}     //levanta uma exceção registrada no console.
}


jogaErro('deu erro', 500)