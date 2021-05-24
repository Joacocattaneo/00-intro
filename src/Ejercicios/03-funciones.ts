/*
    ===== Código de TypeScript =====
*/

//Funciones Basicas

function sumar(a: number, b: number): number{
    return a + b;
}

const sumarFlecha = (a:number, b:number): number => {
    return a + b;
}

function multiplicar(numero: number, base?:number, otroNumero: number = 2): number{
    return numero * base + otroNumero;
}

// Cuando esta bien la sintaxis, se va a traducir a Javacript aunque haya error semántico en typescript
///const resultado = multiplicar(10);
//console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void{
    
    personaje.pv += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strinder',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de Vida', this.pv);
    }
}

curar(nuevoPersonaje, 100);
nuevoPersonaje.mostrarHp();