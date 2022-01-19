const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );


const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 
console.log(letras, numeros);

// un arreglo con una funcion se puede llamar asi
// arr[0]();


// Tarea
// 1. El primer valor del arreglo se llamará nombre
// 2. La funcion se llamará setNombre
const usesState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = usesState( 'Goku' );

console.log( nombre );
setNombre();





