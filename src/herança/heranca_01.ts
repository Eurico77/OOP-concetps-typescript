class Pessoa {
  constructor(
    public nome: string,
    public sobreNome: string,
    private idade: number,
    protected cpf: string
  ) { }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobreNome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobreNome + ' - Aluno';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobreNome + ' - Cliente';
  }
}

const pessoa = new Pessoa('Diego', 'Santos', 32, '123.456.789-10');
const aluno = new Aluno('Diego', 'Santos', 32, '123.456.789-10');
const cliente = new Cliente('Diego', 'Santos', 32, '123.456.789-10');
console.log(pessoa);
console.log(aluno);
console.log(cliente);