class Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    cedula: number;
    nacimiento: string;
    nacionalidad: string;
    telefono: number;

    constructor() {
        this.nombre = "";
        this.apellido = "";
        this.direccion = "";
        this.cedula = 0;
        this.nacimiento = "";
        this.nacionalidad = "";
        this.telefono = 0;
    }
}
// Crear una instancia de la clase Persona
const persona = new Persona();
// Asignar valores a los atributos
persona.nombre = "Alex";
persona.apellido = "Benavides";
persona.direccion = "Ruben Dario y Benalcazar";
persona.cedula = 175377587;
persona.nacimiento = "San Blas";
persona.nacionalidad = "Ecuatoriana";
persona.telefono = 969094219;

console.log(persona);