import { HookApp } from "../HookApp";
import {shallow} from 'enzyme';

describe('Pruebas en <HookApp/>', () => {
  test('Debe mostrarse correctamente', () => {  
    const wrapper = shallow(<HookApp/>);
    expect(wrapper).toMatchSnapshot();
  });
  
});
