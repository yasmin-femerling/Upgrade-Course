import { AddCategory } from "../../components/AddCategory";
import {shallow} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';

describe('Pruebas en el AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper;
    
    beforeEach(() =>{
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

  test('debe mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot();
  });

  test('debe cambiar la caja de texto', () => {
     const input = wrapper.find('input');
     const value = 'Hola Mundo';
     input.simulate('change', {target: {value} });
    });
    
  test('no debe poster informacion on submit si esta vacio', () => {
    wrapper.find('form').simulate('submit',{preventDefault(){}});
    expect(setCategories).not.toHaveBeenCalled();
  });
  
  test('debe', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', {target: {value} });
    wrapper.find('form').simulate('submit',{preventDefault(){}});
    expect(setCategories).toHaveBeenCalled();
    expect(input.prop('value')).toBe('');
  });
  
  
});
