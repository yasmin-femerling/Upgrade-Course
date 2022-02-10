import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { LoginScreen } from "../../components/login/LoginScreen";
import { types } from "../../types/types";

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Prueba en <LoginScreen/>', () => { 
    
    const contextValue = {
        user:{
            logged:false
        },
        dispatch: jest.fn(),
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen/>}/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('debe hacer match el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe realizar el dispatch y la navegacion', () => { 
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type:types.login,
            payload: {name:'Yasmin'}
        });

        expect(mockNavigate).toHaveBeenCalledWith('/marvel', {replace:true});
        
        localStorage.setItem('lastPath','/dc');

        handleClick();
        
        expect(mockNavigate).toHaveBeenCalledWith('/dc', {replace:true});

     });
 })