require('events').EventEmitter.defaultMaxListeners = 100
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

  loginChat(usuario, password){
    I.retry(wait).fillField(locator.fieldUsuario, usuario);
    I.retry(wait).fillField(locator.fieldPassword, password);
    I.retry(wait).click(locator.clickLogin);
    I.retry(wait).waitForVisible(locator.lblchatHeader);
  },

  /* ******************************************************************** */
  //flowResponseCompare(TipoFlujo,ArrayInteracciones)
  async flowResponseCompare(tipoFlujo,arr_interacciones){ 
    I.say('Nuevo Inicio Mapeo Opciones Global...');
    var totalok = 0

    // cantidad interacciones = arr_interacciones.length
    var cant_interacciones = arr_interacciones.length;
    for(i = 0; i < cant_interacciones; i++){
      
      //primer elemento de cada interaccion[i] es la variable "send"
      I.say("\nEnviando : " + arr_interacciones[i].send); 
      I.wait(1)
      I.retry(wait).fillField(locator.fieldChat, arr_interacciones[i].send);
      I.pressKey("Enter");
      I.wait(3)
      
      //extrayendo respuestas reales obtenidas y almacenadas en arr_obtenidos
      I.wait(3)
      if(tipoFlujo == 'OPCIONES'){
        var resultOptions = await I.retry(wait).grabTextFrom(locator.txtOption)
      }else if(tipoFlujo == 'DETALLADO'){
        var resultOptions = await I.retry(wait).grabTextFrom(locator.txtResultadoBot);
      }
      var arr_optobtenidos = []
      for(var resopt of resultOptions){
        arr_optobtenidos.push(resopt)
      }

      //Comparacion opciones esperadas con opciones obtenidas
      I.say('Opciones esperadas : ' + arr_interacciones[i].opciones)
      //cantidad elementos sub array opciones esperadas
      var cant_opts_subarray = arr_interacciones[i].opciones.length
      var takeLastOptions = cant_opts_subarray
      var okesperados = 0
      I.say('Opciones obtenidas :')
      I.say('|'+arr_interacciones[i].send+'|');
      for(j = 0; j < takeLastOptions; j++){
        botresponseindex = (arr_optobtenidos.length - takeLastOptions + j);

        var esperado_formateado = arr_interacciones[i].opciones[j];
        //logica formatear res esperado y omitir emojis unicode y asteriscos *, en caso detallado
        if(tipoFlujo == 'DETALLADO'){
          esperado_formateado = esperado_formateado.replace(/[^\x00-\x7F]/g, "");
          esperado_formateado = esperado_formateado.replace(/[*]/g, "");
        }

        if(esperado_formateado == arr_optobtenidos[botresponseindex]){  
          I.say('\t|_ '+arr_optobtenidos[botresponseindex]);
          ++okesperados           
        }else{
          I.say('\t|_ >>>>>> : '+ arr_interacciones[i].opciones[j] + ' !== ' + arr_optobtenidos[botresponseindex]);     
        }

      }
      if(okesperados==takeLastOptions){
        ++totalok
      }
        
    }

    return (totalok==cant_interacciones)?true:false

  },
  /* ******************************************************************** */

  async flowDetailResponseCompare(arr_detailflow){ 
    I.say('Inicio Mapeo Respuestas Detallado...');
    var totalok = 0
    for(i = 0; i < arr_detailflow.length; i++){       

      var arr_resesperados = []

      for(j = 0; j < arr_detailflow[i].length; j++){
          if(j==0){
              I.say("Enviando : " + arr_detailflow[i][j]); 
              I.wait(1)
              I.retry(wait).fillField(locator.fieldChat, arr_detailflow[i][j]);
              I.pressKey("Enter");
              I.wait(3)
          }else{
            arr_resesperados.push(arr_detailflow[i][j])
          }                   
      }

      I.say('Respuestas esperadas : ' + arr_resesperados)
      
      //extrayendo respuestas reales obtenidas y almacenadas en arr_resobtenidos
      I.wait(3)
      I.waitForInvisible('//div[@class="_4a0v _1x3z"]');
      var results = await I.retry(wait).grabTextFrom(locator.txtResultadoBot);
      var arr_resobtenidos = []
      for(var resline of results){
        arr_resobtenidos.push(resline)
      }
      
      //iteracion para compara ultimos n resultados con el arreglo arr_resesperados, tomando referencia lenght de arr_resesperados
      //takeLastOptions : ultimas n respuestas a tomar = tamaño array-1 o =tamaño del nuevo arr_resesperados
      var takeLastOptions = arr_resesperados.length
      var okesperados = 0
      for(k = 0; k < takeLastOptions; k++){
        responseindex = (arr_resobtenidos.length - takeLastOptions + k);

        //logica formatear res esperado y omitir emojis unicode y asteriscos *
        var esperado_formateado = arr_resesperados[k];
        esperado_formateado = esperado_formateado.replace(/[^\x00-\x7F]/g, "");
        esperado_formateado = esperado_formateado.replace(/[*]/g, "");

        if(esperado_formateado==arr_resobtenidos[responseindex]){  
          ++okesperados           
        }else{
          I.say('* DIFERENCIA! : '+ arr_resesperados[k]+ ' <> ' +arr_resobtenidos[responseindex]);     
        }
      }   
    
      //incremental de seccion de array [i]
      if(okesperados==takeLastOptions){
        ++totalok
      }

    }

    return (totalok==arr_detailflow.length)?true:false

  },
  /* ******************************************************************** */
  async obtenerRespuestas() { 

    I.wait(4)
    let results = await I.retry(wait).grabAttributeFrom(locator.txtBotResponse,'aria-label')
    var countresults = 0;
    var arrresults = []
    for(var res of results){
      ++countresults;      
      I.retry(wait).say(countresults + '. Respuesta > ' + res)  
      arrresults.push(res)
    }  
    // I.retry(wait).say('>>>>> Ultima respuesta ('+count+'): ' + arrresults[arrresults.length-1])   
        
  },  

  /* ******************************************************************** */
  resetFlow(){
    I.wait(1);
    I.pressKey("Tab");
    I.wait(1);
    I.pressKey("Escape");
    I.retry(wait).moveCursorTo(locator.lblChatSection);
    I.retry(wait).click(locator.btnChatOptions);    
    I.retry(wait).click(locator.lblOptEliminar);
    I.retry(wait).click(locator.btnConfirmEliminar);
    I.wait(1);
    I.retry(wait).fillField(locator.fieldSearchChat,'Esika cyzone lbel');
    I.wait(3);
    I.retry(wait).click('Esika cyzone lbel');
    I.wait(1);
    I.retry(wait).click(locator.btnEmpezar);
    //temp wait
    I.waitForVisible('//*[contains(text(),"BENEFICIOS")]',10);
    I.wait(3);
  },

  closeTestFlow(){
    I.say('Finalizo Mapeo de Opciones'); 
  },

}

