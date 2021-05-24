/*
    ===== Código de TypeScript =====
*/

// Desestructuracion del objeto que esta exportando el modulo
import { calculaISV, Producto } from "./06-desestructuracion-funcion";
// Al importar ejecuta el otro archivo.


const carritoCompras: Producto[] = [ 
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const  [total, isv] = calculaISV( carritoCompras );

console.log('Total', total);
console.log('ISV', isv);

