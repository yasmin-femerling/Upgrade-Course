import {getHeroeById,getHeroesByOwner} from '../base/08-imp-exp';
import heroes, {owners} from '../base/data/heroes'

describe('Pruebas en funciones en heores', () => {
    test('debe de retornar un heore por id', () =>{

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('debe de undefined si el heroe no existe', () =>{

        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual(undefined);
    });

    test('debe retornar un arreglo con heroes de DC', () =>{

        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroe).toEqual(heroesData);
    });

    test('debe retornar un arreglo con heroes de Marvel', () =>{

        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroe.length).toBe(2);
        expect(heroe).toEqual(heroesData);
    });
})