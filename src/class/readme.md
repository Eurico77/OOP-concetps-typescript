### <h1> Respositorio destinado a recaptulação de conceitos da programação orientada a objetos </h1>

* ## CLASSES

- ### ***classes sao moldes para criar objetos de forma literal***
*exp*: 
```ts
  class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
```
- classes também são ultilizadas como tipos
- classes são definidas com a palavra-chave `class`
- classes são funções construtoras antes de serem instanciadas
- classes são se tornam objetos quando instanciadas
- classes podem ser definidas em qualquer lugar do código

---------------------------------------------------------------------------------------------------------------------

* ## MODIFICADORES DE ACESSO

- ***modificadores de acesso são utilizados para definir o nivel de acesso de um atributo ou método***
- ***public: acesso publico***
- ***private: acesso privado***
- ***protected: acesso protegido***
- podem ser ultilizados em metodos e atributos ou em classes

  *public*:
```ts
    class Person {
     constructor(public name: string, public age: number) {
  }
}
```
- public é o modificador de acesso padrão
- public dara acesso ao atributos e métodos da classe pai para filhos
- public é inferido se não for definido
- public é o modificador de acesso mais abrangente
- public é o modificador de acesso que permite acesso de qualquer lugar do código
---------------------------------------------------------------------------------------------------------------------
  *private*:
```ts
    class Person {
      constructor(private name: string, private age: number) {
      }
  }
```
- private dara acesso apenas ao atributos e métodos da classe
- private é o modificador de acesso mais restrito
- private é o modificador de acesso que permite acesso apenas a classe
- private é o modificador de acesso para promover o encapsulamento
- private é o modificador de acesso para proteger o acesso a atributos e métodos da classe
- ao setar algum atributo ou método como private, o mesmo não pode ser acessado fora da classe, ou modificado por outra classe ou por sua instancia
- a forma correta de mutar um atributo privado é utilizar o método setter ou um metodo publico que faça a mutação
---------------------------------------------------------------------------------------------------------------------
  
  
  *protected*:

```ts
    class Person {
      constructor(protected name: string, protected age: number) {
      }
  }
```
- protected dara acesso ao atributos e métodos da classe e aos filhos