import {shallow} from 'enzyme';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://random.com';
    
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

  test('debe mostrar correctamente el componente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('debe tener un parrafo con el title', () => {
    
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });
  
  test('debe tener la imagen igual al url y alt de props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);

  });

  test('debe tener animate_fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    console.log(className)
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
  
  
  
});
