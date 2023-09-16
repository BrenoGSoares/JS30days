// EX 01

// Crie uma classe Animal. A classe terá propriedades de nome, idade, cor, pernas e criará diferentes métodos
class animal {
  constructor(type, name, age, color, legs) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getInfoAnimal() {
    const info = 'O nome do animal é ' + this.name + ' e ele é um ' + this.type;
    return info;
  }
}

// const dog = new animal('cachorro', 'fred', '10', 'Preto', 4);
// console.log(dog);
// console.log(dog.getInfoAnimal());

// Crie uma classe filha Cachorro e Gato a partir da Classe Animal.

// syntax
class dog extends animal {}
const doguinho = new dog('cachorro', 'fred', '10', 'Preto', 4);
console.log(doguinho);
console.log(doguinho.getInfoAnimal());

class cat extends animal {}
const catinho = new dog('gato', 'cristal', '10', 'branca', 4);
console.log(catinho);
console.log(catinho.getInfoAnimal());

// EX 02

//Substitua o método que você cria na classe Animal
class bird extends animal {
  constructor(type, name, age, color, legs, gender) {
    super(type, name, age, color, legs);
    this.gender = gender;
  }

  getInfoAnimal() {
    let sex = this.gender == 'Male' ? 'ele' : 'ela';
    const info = `O nome do animal é ${this.name} e ${sex} é um ${this.type}`;
    return info;
  }
}

const birdzinho = new bird('Pássaro', 'Leleco', '5', 'Amarelo', 2, 'Male');
console.log(birdzinho);
console.log(birdzinho.getInfoAnimal());
