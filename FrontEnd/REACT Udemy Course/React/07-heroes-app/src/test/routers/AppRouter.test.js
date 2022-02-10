import { AppRouter } from "../../routers/AppRouter";
import {mount} from 'enzyme';
import { AuthContext } from "../../auth/authContext";

describe('pruebas en AppRouter', () => {
    
    const contextValue = {
        user:{
            logged:false
        }
    }

    test('debe mostrar login si no esta autenticado', () => {
   
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
            );
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('LoginScreen') ;
    });
    
    test('debe mostrar componente Marvel si  esta autenticado', () => {
        
        const contextValue = {
            user:{
                logged:true,
                name: 'Pepe'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
            );
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true) ;
    });
});
