import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types";

describe('pruebas en authReducer', () => { 
    test('debe realizar login', () => {
        
        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Yasmin'
            }
        }

        const state = authReducer(initState,action);
        expect(state).toEqual({
            uid:'abc',
            name:'Yasmin'
        })
    });

    test('debe realizar logout', () => {
        
        const initState = {};
        const action = {
            type: types.logout
        }

        const state = authReducer(initState,action);
        expect(state).toEqual({})
    });

    
    test('no debe realizar cambios', () => {
        
        const initState = {};
        const action = {
            type: 'abcde'
        }

        const state = authReducer(initState,action);
        expect(state).toEqual(initState)
    });
 })