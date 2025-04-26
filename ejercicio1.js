//Clase Animal
class Animal {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    describir(){
console.log (`Soy un animal llamado ${this.nombre} y tengo ${this.edad} años.`);
    }
}

//Clase Perro que hereda de Animal
class Perro extends Animal {
    constructor (nombre, edad, raza) {
        super (nombre, edad); //llama al constructor de la clase padre
        this.raza = raza;
    }
    ladrar(){
        console.log (`${this.nombre} dice guau! guau!`);
    }
}

// material de prueba
const perro1 = new Perro ("Togo Fernando", 5, "Labrador");
perro1.describir(); 
perro1.ladrar();





//""  '' ``