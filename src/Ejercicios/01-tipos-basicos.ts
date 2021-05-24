/*
    ===== Código de TypeScript =====
*/

//INFERENCIA DE TIPOS
let nombre: string = 'Joaquin'; 
let hp: number | string = 95;
let isAlive: boolean = true;

nombre = 'Pepe';
hp = 'HP'

console.log( nombre, hp );