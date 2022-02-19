class Pessoa {
  constructor(
    private nome: string,
    private idade: number,
    private _cpf: string,

  ) {
    // isso aqui faz com que o cpf seja setado atraves da construção da classe pelo metodo set, é opcional
    // this.cpf = _cpf;
  }

  get cpf(): string {
    console.log('chamando o getter');
    return this._cpf;
  }


  // para setar valor eu nao preciso definir o tipo de retorno
  set cpf(value) {
    console.log('chamando o setter');
    this._cpf = value;
  }
}

const pessoa = new Pessoa('João', 20, '123.456.789-10');
console.log(pessoa.cpf);
pessoa.cpf = '123.456.789-11';
console.log(pessoa.cpf);