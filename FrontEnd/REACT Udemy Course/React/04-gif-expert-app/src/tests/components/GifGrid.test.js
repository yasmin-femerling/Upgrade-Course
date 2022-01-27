import { GifGrid } from "../../components/GifGrid";
import React from 'react';
import {shallow} from 'enzyme';
import{useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs.js');
import '@testing-library/jest-dom';

describe('Pruebas en GifGrid', () => {

  test('debe mostrarse correctamente', () => {
    useFetchGifs.mockReturnValue({
        data:[],
        loading:true,
    });
    const wrapper = shallow(<GifGrid/>);
    expect(wrapper).toMatchSnapshot();
});

test('debe mostrar items cuando se cargan imagenes usando useFetchGifs', () => {
    const gifs = [{
        id:'ABC',
        url:'https://lalala.com'
    }]
    useFetchGifs.mockReturnValue({
        data:gifs,
        loading:false,
    });
    const wrapper = shallow(<GifGrid/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
});

test('debe', () => {
  ;
});

});
