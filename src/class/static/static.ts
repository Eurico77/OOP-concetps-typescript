class Person {
  static cpfPadrao = '000.000.000-00';
  static idadePadrao = 0;

  constructor(
    public nome: string,
    public idade: number,
    public cpf: string,
  ) { }

  static criarPorJSON(json: any): Person {
    // poderia ser new this(json.nome, json.idade, json.cpf);
    return new Person(json.nome, json.idade, json.cpf);
  }

  static criarPorObjeto(obj: any): Person {
    // poderia ser new this(obj.nome, obj.idade, obj.cpf);
    return new Person(obj.nome, obj.idade, obj.cpf);
  }

  static criarPerson = (): Person => {
    return new Person('', 0, '');
  }

}

const json = {
  'nome': 'João',
  'idade': 20,
  'cpf': '123.456.789-10'
};

const obj = {
  nome: 'João',
  idade: 20,
  cpf: '123.456.789-10'
};

const p1 = Person.criarPorJSON({ json })
const p2 = Person.criarPorObjeto({ obj })
const p3 = Person.criarPerson()
console.log(p1);
console.log(p2);
console.log(p3);
const idade = Person.idadePadrao;
const cpf = Person.cpfPadrao;
console.log(idade);
console.log(cpf);



