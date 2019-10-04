const MyModule = require('./prueba')

// cantidad interacciones = MyModule.ArrayInteracciones.length
var cant_interacciones = MyModule.ArrayInteracciones.length;
for(i = 0; i < cant_interacciones; i++){

    //primer elemento de cada interaccion[i] es la variable "send"
    console.log(MyModule.ArrayInteracciones[i].send);

    //cantidad elementos sub array opciones
    var cant_opts_subarray = MyModule.ArrayInteracciones[i].opciones.length
    for(j = 0; j < cant_opts_subarray; j++){
        console.log(MyModule.ArrayInteracciones[i].opciones[j]);
    }

}

// for(i = 0; i < 3; i++){
//     console.log('asdad');
//     console.log('\t asdad');
// }
console.log('--------------------------------------------------------');
console.log('|'+ 'asdadada' +'|');
console.log('\t|_ '+'xyzsd');
console.log('\t|_ '+'pokdw');
console.log('\t|_ '+'asdad');

// console.log(MyModule.ArrayInteracciones[0].send); 
// console.log(MyModule.ArrayInteracciones[0].opciones[0]); 
// console.log(MyModule.ArrayInteracciones[0].opciones[1]);
// console.log(MyModule.ArrayInteracciones[0].opciones[2]);
// console.log('array size : ' + MyModule.ArrayInteracciones[0].opciones.length); 

// console.log(MyModule.ArrayInteracciones[1].send); 
// console.log(MyModule.ArrayInteracciones[1].opciones[0]); 
// console.log(MyModule.ArrayInteracciones[1].opciones[1]);
// console.log('array2 size : ' + MyModule.ArrayInteracciones[1].opciones.length); 

// console.log('>>>>>>>>>>>>>>>' + MyModule.ArrayInteracciones.length);