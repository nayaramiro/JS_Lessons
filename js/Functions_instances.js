
  function Person(name) {
    //This est une variable/attribue qui represente l'instance de l'objet
    this.name = name;
    this.printName = function () {
      alert(name);
    };

    this.returnAnimal = function (animal) {
      return animal;
    };
  }

  function Animal(name) {
    //Si name n'est pas fourni, il prend la valeur "No Name"
    name = name || "No Name";
    this.name = name;
    this.type = "Buildo";
  }

  //Ceci créé une nouvelle instance de Person
  var person = new Person("John");
  //person.name = "Doe";

  var animal = new Animal();

  alert(animal.name);
  person.printName("John");
  alert(person.returnAnimal(animal).type);

