var Interaccion = {          
    send: "MENU", 
    opciones: [ 'Estas son las opciones en las que puedo ayudarte 😊 Elige una👇',
                'PEDIDOS',
                'MI NEGOCIO',
                'BENEFICIOS'
]}; 
var Interaccion2 = {          
    send: "PEDIDOS", 
    opciones: [ 'Estas son las opciones de *BENEFICIO* que tengo para ti 👇',
                'Incentivos',
                'Descuentos',
                'Ofertas exclusivas'
]};

ArrayInteracciones = [];
//SECUENCIA DE MAPEO
ArrayInteracciones.push(Interaccion);

ArrayInteracciones.push(Interaccion2);

module.exports = {
    ArrayInteracciones
}