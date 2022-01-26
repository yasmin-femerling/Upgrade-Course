
import {getUser, getUsuarioActivo} from '../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objecto', () =>{
       const userTest =  {
            uid: 'ABC123',
            username: 'Psswrd'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('getUserActivo debe retornar un objecto', () =>{
        
        const userTest  = {
            uid: 'ABC567',
            username: 'Laura'
        }

        const user = getUsuarioActivo('Laura');
        
        expect(user).toEqual(userTest);

    });

})