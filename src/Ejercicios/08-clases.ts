/*
    ===== Código de TypeScript =====
*/

// Diferencia entre interface y Clase: Las interfaces no existen en javacript por lo tanto no se genera codigo para ellas
// Son una especia de chequeo en tiempo de compilacion para typescript
// Las clases aparecen en el codigo javascript
// Las clases sirven para crear instancias. Las interfaces no.

interface Personaje2 {
    alterEgo?: string;
    edad? : number;
    nombreReal?: number;

    imprimirNombre: () => string;
}

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ){};
}

// Con el atributo de visibilidad dentro del constructor se crea la propiedad, sino es el parámetro del contructor

class Heroe extends PersonaNormal {
    // private alterEgo: string;
    // public edad : number;
    // nombreReal: string;
    constructor ( 
        public alterEgo: string,
        public edad: number,
        nombreReal: string
    ) {
        super( nombreReal, 'New York, Usa');
    };
}

const ironman = new Heroe('Ironman', 45, 'Tony'); // Instancia

console.log(ironman);

