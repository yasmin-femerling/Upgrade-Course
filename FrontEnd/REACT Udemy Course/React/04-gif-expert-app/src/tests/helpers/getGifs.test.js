import { getGifs } from "../../helpers/getGifs";

describe('Prubeas con getGifs fetch', () => {
  test('debe traer 10 elementos', async () => {
     
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);

  });

  test('debe traer un arreglo vacio si mando nada', async () => {
   
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);

  });
  
  
});
