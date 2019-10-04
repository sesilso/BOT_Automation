var Interaccion = {          
    send: "MENU", 
    opciones: ['PEDIDOS','MI NEGOCIO','BENEFICIOS'] 
}; 
var Interaccion2 = {          
    send: "MI NEGOCIO", 
    opciones: ['Actualizar Datos','Datos de campaña','Herramientas','Comprar en tienda'] 
};
var Interaccion3 = {          
    send: "Actualizar Datos", 
    opciones: ['Datos personales','Mi dirección','Preguntas frecuentes'] 
};
var Interaccion4 = {          
    send: "Datos de campaña", 
    opciones: ['Mi código consultora','Datos de campaña','Fecha facturación'] 
};
var Interaccion5 = {          
    send: "Herramientas", 
    opciones: ['Aprende como vender','Catálogos'] 
};
var Interaccion6 = {          
    send: "Comprar en tienda", 
    opciones: ['Belcenter','Tiendas Ésika'] 
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
