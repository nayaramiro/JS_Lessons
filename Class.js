
        class Animal{
            constructor(name, type){
                name = name || "No Name";
                type = type || "No Type";
                this.name = name;
                this.type = type;
            }
            printName(){
                console.log(this.name);
            }
        }

        //Extends, nous devons utiliser le mot cle super dans le constructeur de la classe fille
        //cette class va heriter de la class Animal, elle contient donc les memes proprietes et methodes
        class Dog extends Animal{
            constructor(name, length){
                super(name);
                length = length || "Small";
                this.length = length;
            }
        }

        dog = new Dog("Rex");
        //animal = new Animal();
        console.log(dog);