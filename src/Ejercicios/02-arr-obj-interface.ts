/*
    ===== Código de TypeScript =====
*/

//INFERENCIA DE TIPOS
//Arreglos
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

habilidades.push('Pepe');

//Interface -- no se compilan en lineas ejecutables en javascript
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

//Objetos
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}


console.table(personaje);