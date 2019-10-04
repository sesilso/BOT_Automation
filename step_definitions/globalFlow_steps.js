const MyModule = require('../modules/globalFlow.module')
const BotInteractionPedidos = require('../bot_responses/pedidos_options')
const BotInteractionNegocio = require('../bot_responses/negocio_options')
const assert = require('assert');

const { I } = inject();

//COMPARACION DETALLADA : Los textos de respuesta deben ser ingresador segun codigo en botmaker: *NEGRITAS*, emojis unicode 👇
var int_MENU = ['MENU'];
int_MENU.push('Estas son las opciones en las que puedo ayudarte 😊 Elige una👇');
int_MENU.push('PEDIDOS');
int_MENU.push('MI NEGOCIO');
int_MENU.push('BENEFICIOS');

var int_BENEFICIOS = ['BENEFICIOS'];
int_BENEFICIOS.push('Estas son las opciones de *BENEFICIO* que tengo para ti 👇');
int_BENEFICIOS.push('Incentivos');
int_BENEFICIOS.push('Descuentos');
int_BENEFICIOS.push('Ofertas exclusivas');


var arr_detailflow = [int_MENU,int_BENEFICIOS]
/***************************************************************************/


Given('Ingreso a Facebook Messenger utilizando mi usuario {string} y mi clave {string}', (Usuario,Password) => {
    MyModule.Ini();
    MyModule.loginChat(Usuario,Password);
    MyModule.resetFlow();
});

When('Navego a traves del flujo {string} en la categoria {string}', (TipoFlujo,Categoria) =>
    //AsyncFunctionFix : solucion para poder recuperar el return de un metodo asincrono y poder realizar el assert
    AsyncFunctionFix(TipoFlujo,Categoria)
);

async function AsyncFunctionFix(TipoFlujo,Categoria){    
    
    switch (Categoria) {
        case 'PEDIDOS':
            assert.equal(true, await MyModule.flowResponseCompare(TipoFlujo,BotInteractionPedidos.ArrayInteracciones)); 
            break;
        case 'MI NEGOCIO':
            assert.equal(true, await MyModule.flowResponseCompare(TipoFlujo,BotInteractionNegocio.ArrayInteracciones)); 
            break;     
        default:
            assert.equal(true, await MyModule.flowResponseCompare(TipoFlujo,BotInteractionPedidos.ArrayInteracciones)); 
            assert.equal(true, await MyModule.flowResponseCompare(TipoFlujo,BotInteractionNegocio.ArrayInteracciones)); 
            break;
    }        

}

When('Navego a traves del flujo detallado de respuestas', () =>
    //AsyncFunctionFix : solucion para poder recuperar el return de un metodo asincrono y poder realizar el assert
    AsyncFunctionFix2()
);

async function AsyncFunctionFix2(){
    assert.equal(true, await MyModule.flowDetailResponseCompare(arr_detailflow)); 
}

Then('Confirmo el mapeo completo de opciones del Bot', () => {
    MyModule.closeTestFlow();
});

