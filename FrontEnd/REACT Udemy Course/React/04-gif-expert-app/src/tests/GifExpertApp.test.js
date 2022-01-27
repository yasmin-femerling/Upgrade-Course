import { GifExpertApp } from "../GifExpertApp";
import React from 'react';
import {shallow} from 'enzyme';

describe('Pruebas de GifExpertApp', () => {
  test('debe mostrarse correctamente', () => {
    const wrapper = shallow(<GifExpertApp/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should first', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
  
  
});
