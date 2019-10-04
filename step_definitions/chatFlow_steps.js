const MyModule = require('../modules/chatFlow.module')
const assert = require('assert');

const { I } = inject();

Given('Ingreso al Chat a traves de mi usuario y mi clave', () => {
  MyModule.Ini();  
});

When('Ingreso palabras las Palabras claves', () => {
  MyModule.metodo2(); 
});

Then('Obtengo la Respuesta Tipo {string}', (id) => {
  assert.equal(true,MyModule.metodo3(id));

});

Then('Obtengo la Respuesta Tipo simple', () => {
  MyModule.metodo4();
});
