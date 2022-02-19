export class Animal {
  constructor(public nome: string, public idade: number) { }

  fala() {
    console.log(`${this.nome} fala`);
  }

  anda() {
    console.log(`${this.nome} anda`);
  }

  comunica() {
    console.log(`${this.nome} comunica`);
  }

}

export class Cachorro extends Animal {
  constructor(nome: string, idade: number, public raca: string) {
    // o super é chamado antes de qualquer coisa para realizar a inicialização da classe pai
    // com isso é possível utilizar os atributos e métodos da classe pai através do this
    super(nome, idade)
  }

  fala() {
    console.log(`fazendo algo antes de iniciar o super da classe pai`);
    const res = super.fala();
    return res + ' eu sou um cachorro';
  }

  getRaca(): string {
    return this.raca;
  }
}

const cachorro = new Cachorro('Rex', 3, 'Vira-lata');
console.log(cachorro);