// Arreglos en JS


// const arreglo = new Array( 100 ); //no recomendable,
                                    //a menos que sea un arreglo con posiciones iniciales
                                    //de todas formas se pueden agregar mas


const arreglo = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)

//Al usar push se modifica el objecto principal
//NO RECOMENDABLE
//usar spread

let arreglo2 = [ ...arreglo, 5 ];

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );








