export class Colaborador {
  constructor(
    public nome: string,
    public idade: number) { }
}

export class Empresa {
  constructor(
    readonly nome: string, // infere o modificador public implicito
    public cnpj: string,
    private readonly colaboradores: Colaborador[] = []
  ) { }

  adicionarColaborador({ ...colaborador }: Colaborador) {
    this.colaboradores.push(colaborador);
  }

  listarColaboradores() {
    return this.colaboradores;
  }
}

console.log(typeof Empresa);

const empresa = new Empresa('Rocketseat', '42.321.123/0001-00',);
const colaborador = new Colaborador('Diego', 32);
const colaborador2 = new Colaborador('Gabriel', 30);
const colaborador3 = new Colaborador('Lucas', 28);
empresa.adicionarColaborador({ ...colaborador, ...colaborador2, ...colaborador3 });
console.log(empresa);