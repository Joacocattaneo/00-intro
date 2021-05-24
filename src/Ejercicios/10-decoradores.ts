/*
    ===== Código de TypeScript =====
*/

// Decoradores. Existen en typescript pero no en javascript
// Sirven para cambiar las clases en momento que ser definidas.
// Son una funcion que expande o añade funcionalidades especiales

function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
    ) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
}

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola Mnudo');
    }

}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);