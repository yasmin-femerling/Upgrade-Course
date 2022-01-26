
const apiKey = 'Nrhq2Aw3EyW0PTWbxq8roDRLwpzfqZBL';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//del fetch la conversimos a json, esto regresa otra promesa
//convertir al json necesita otro then

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );


    })
    .catch( console.warn );

