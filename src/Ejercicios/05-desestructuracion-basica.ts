/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor : Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

// Desestructuracion de objetos
// const { volumen, segundo , cancion, detalles: { autor } } = reproductor;
const cancion = 'Cancion'

const { volumen, segundo , cancion: cancionReproducor, detalles } = reproductor;
const { autor, anio } = detalles


//console.log(volumen)
//console.log(segundo)
//console.log(cancionReproducor)
//console.log(anio)
//console.log(autor)

// Desestructuracion de arreglos, la semantica es por posicion. 

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = dbz;


console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', p3);

