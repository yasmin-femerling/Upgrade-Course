const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;


export const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 


// un arreglo con una funcion se puede llamar asi
// arr[0]();


// Tarea
// 1. El primer valor del arreglo se llamarĂ¡ nombre
// 2. La funcion se llamarĂ¡ setNombre
const usesState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}





