var Interaccion = {          
    send: "MENU", 
    opciones: ['PEDIDOS','MI NEGOCIO','BENEFICIOS'] 
}; 
var Interaccion2 = {          
    send: "PEDIDOS", 
    opciones: ['Pasar pedido','Seguir pedido','Deuda','Cambios y devoluci..'] 
};
var Interaccion3 = {          
    send: "Pasar pedido", 
    opciones: ['Cuándo pasar pedido','Agregar producto','Preguntas frecuentes'] 
}; 
var Interaccion4 = {          
    send: "Seguir pedido", 
    opciones: ['Pedido ingresado','Historial de pedido','Cuándo llega mi pe..'] 
};
var Interaccion5 = {          
    send: "Deuda", 
    opciones: ['Monto de la deuda','Fecha límite de pago','Preguntas frecuentes'] 
};
var Interaccion6 = {          
    send: "devoluciones", 
    opciones: ['Hacer un cambio o ..','Política de postve..'] 
};

ArrayInteracciones = [];
//SECUENCIA DE MAPEO
ArrayInteracciones.push(Interaccion);

ArrayInteracciones.push(Interaccion2);
// ArrayInteracciones.push(Interaccion3);
// ArrayInteracciones.push(Interaccion2);
// ArrayInteracciones.push(Interaccion4);
// ArrayInteracciones.push(Interaccion2);
// ArrayInteracciones.push(Interaccion5);
// ArrayInteracciones.push(Interaccion2);
// ArrayInteracciones.push(Interaccion6);

module.exports = {
    ArrayInteracciones
}
