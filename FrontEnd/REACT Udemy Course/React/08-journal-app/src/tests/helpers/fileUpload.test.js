import { fileUpload } from '../../helpers/fileUpload';

var cloudinary = require('cloudinary')
cloudinary.config({ 
    cloud_name: 'atos-yasmin', 
    api_key: '123242269955913', 
    api_secret: '2sxlabCtNhE3PS2eoeZcxyfZwV0' 
});

describe('Pruebas en fileUpload', () => {

    test('debe de cargar un archivo y retornar el URL', async(done) => {

        const resp = await fetch('https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg','');

        cloudinary.v2.api.delete_resources( imageId, {}, ()=> {
            done();
        });
        
    })

    test('debe de retornar un error', async() => {

        const file = new File([], 'foto.png');
        const url = await fileUpload( file );

        expect( url ).toBe( null );

        
    })
    
    


})


