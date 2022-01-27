import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe desplegarse correctamente', async() => {
    const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch') );
    const {data, loading} = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
});

test('debe retornar un arreglo de imagenes y loading en false', async() => {
    const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch') );
    await waitForNextUpdate();
    const {data, loading} = result.current;
    
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
  
  
});
