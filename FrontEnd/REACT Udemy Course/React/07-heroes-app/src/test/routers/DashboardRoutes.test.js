import {mount} from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';


describe('Pruebas en Dashboard Routes', () => { 

    const contextValue = {
        user: {
            logged:true,
            name:'Lola'
        }
    }

    test('Debe mostrarse correctamente ', () => { 
        const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <DashboardRoutes/>
            </MemoryRouter>
        </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Lola');
     }) 

    test('Debe mostrar correctamente DC', () => { 
        const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/dc']}>
                <DashboardRoutes/>
            </MemoryRouter>
        </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('DC Screen');
     }) 

})