import { getImagen } from "../base/11-async-await";

describe('Pruebas con async-await', () => {
  test('debe retornar el url de la imagen', async () => {
    
    const url = await getImagen();
    expect(typeof url).toBe('string');

    // expect(url.includes('http://')).toBe(true);
  });
  
});
