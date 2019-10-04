const config= require('../locators/ChatFlow.locator')
const globals= require('../bot_responses/global.responses')
let locator=config.locator;
let variable=globals.variable;

const { I } = inject();
let wait = { retries: 3, minTimeout: 2000 };

module.exports={
  
  Ini() {
    I.amOnPage('/');
  },

  metodo2(){
    I.say('I am on WHEN step'); 
  },

  metodo3(id){
    if(variable.respuesta1==id){
      return true;
    }else{
      I.say('¡FALLÓ TEST!: '+variable.respuesta1+ '<>' +id);
      return false;
    }
  },

  metodo4(){
    I.say('I am on THEN step');
  }
}

