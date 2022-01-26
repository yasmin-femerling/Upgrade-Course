import { getHeroeById } from '../base/08-imp-exp'

// const promise = new Promise() 
// cuando se termina la pila de ejecucion asincrona se ejecuta la promesa
// se crean con un callback que tiene dos callbacks (resolve y reject)
// then cuando se cumple la promesa
// catch cuando no se cumple
// finally se ejecuta siempre despues de then o catch

const promesa = new Promise( (resolve, reject) => {

    setTimeout( () =>  {
        const p1 = getHeroeById(2);
        //resolve tiene un argumento que lo pasa a la promesa
        //y puede usarse cuando llamas al then
        resolve( p1 );
        //este arugmento se usa con el catch
        // reject( 'No se pudo encontrar el héroe' );
    }, 2000 )

});

promesa.then( (heroe) => {
    console.log('heroe', heroe)
})
.catch( err => console.warn( err ) );

// funcion bien hecha que maneja el error

export const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 1500 )
    
    });


}


