interface employee{
    code: number,
    name: string
}

const funcionario = {} as employee;
funcionario.code = 1;
funcionario.name = "Joao";


console.log(funcionario);