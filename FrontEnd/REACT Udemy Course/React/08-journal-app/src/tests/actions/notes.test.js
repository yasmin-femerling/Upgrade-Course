import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
import { types } from '../../types/types';
import configureStore from 'redux-mock-store';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING'
    },
    notes: {
        active: {
            id: '02L6n2ZPdEgpELw8y7ML',
            title: 'Hola',
            body: 'Mundo'
        }
    }
};

let store = mockStore(initState);

describe('Pruebas con las acciones de notes', () => {

    test('debe de crear una nueva nota startNewNote', async() => {
        
        await store.dispatch( startNewNote() );
        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });
    })

    
})
