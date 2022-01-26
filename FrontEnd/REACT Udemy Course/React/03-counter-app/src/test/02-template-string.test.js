import {getSaludo} from '../base/02-template-string';
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar hola yasmin', () => {
        const nombre = 'Yasmin';
        const saludo = getSaludo( nombre );
        expect( saludo ).toBe('Hola ' + nombre);
    })

    test('getSaludo debe retornar hola carlos si no hay argumento', () => {
        const saludo = getSaludo();
        expect( saludo ).toBe('Hola Carlos');
    })

})