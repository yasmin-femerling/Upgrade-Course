import {retornaArreglo} from '../base/07-deses-arr';
describe('Pruebas en desestructuracion', () => {
    test('debe retornar un string y un numero', () =>{
        const [letras, numeros] = retornaArreglo();

        expect(typeof letras).toBe('string');
        expect(letras).toBe('ABC');
        expect(typeof numeros).toBe('number');
        expect(numeros).toBe(123);

    });
})