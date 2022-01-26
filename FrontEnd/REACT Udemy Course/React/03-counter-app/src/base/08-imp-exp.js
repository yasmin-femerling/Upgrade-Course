// necesita el export
//import {heroes} from '../data/heroes';

//si heores es default
import heroes, {owners} from './data/heroes';
console.log(owners);

// console.log( owners );

export const getHeroeById = (id) => 
    heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// find solo regresa uno, usamos filter
export const getHeroesByOwner = ( owner ) => 
    heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );


