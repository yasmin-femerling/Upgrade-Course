
// Funciones en JS

//NO RECOMMENDED
// function saludar(nombre){
//     return `Hola, ${nombre}`;
// }

//Al asignarle una constante
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

// console.log( saludar('Yas') )

console.log( saludar2('Yas') );
console.log( saludar3('ALe') );
console.log( saludar4() );

//Obviamos el return
export const getUser = () => ({
        uid: 'ABC123',
        username: 'Psswrd'
});


const user = getUser();
console.log(user);

// Tarea
export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
});
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);



