import { mount } from "enzyme";
import { SearchScreen } from "../../components/search/SearchScreen";
import {MemoryRouter} from 'react-router-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockNavigate,
}));

describe('Pruebas en <SearchScreen/>', () => { 
    test('debe mostrarse correctamente con valores por defecto', () => { 
        const wrapper = mount(
            <MemoryRouter>
                <SearchScreen/>
            </MemoryRouter>
            );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un héroe');
     });

     test('debe mostrar a Batman y el input con el valor del queryString', () => { 
         const wrapper = mount(
             <MemoryRouter initialEntries={['/search?q=batman']}>
                 <SearchScreen/>
             </MemoryRouter>
         );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input').prop('value')).toBe('batman');
      });

      test('debe mostrar error si no encuentra el heroe', () => { 
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=laura']}>
                <SearchScreen/>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-danger').text().trim()).toBe('No hay resultados: laura');
        
    });
    
    test('debe llamar el navigate a la nueva pantalla', () => { 
           const wrapper = mount(
               <MemoryRouter initialEntries={['/search']}>
                   <SearchScreen/>
               </MemoryRouter>
           );
           
           wrapper.find('input').simulate('change', {
            target:{
                name:'searchText',
                value: 'batman'
            }
           });

           wrapper.find('form').prop('onSubmit')({
               preventDefault(){}
           });

           expect(mockNavigate).toHaveBeenCalledWith('?q=batman')


        })

 })