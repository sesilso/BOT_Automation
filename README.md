1.Crear Carpeta proyecto. ubicar path del commandpront dentro de esa carpeta
2.> npm install codeceptjs puppeteer --save
3.> npx codeceptjs init    (para configurar)
4."codecept.conf.js" : 
	{ // ..
	  helpers: {
		Puppeteer: {
		  url: "http://localhost",
		  show: true,
		  waitForNavigation: "networkidle0"
		}
	  }
	  // ..
	}

5. npx codeceptjs gt    (CodeceptJS test should be created with gt command)
**6.(Sin gherkin)
 	___________________________________________________
	Feature('Sample Test');

	Scenario('open my website', (I) => {
	  I.amOnPage('http://todomvc.com/examples/react/');
	  pause(); ...... permite pausa interactiva para ejecutar en consola
	});
	___________________________________________________
**7. > npx codeceptjs run --steps   (ejecutar test sin gherkin)

8. > npx codeceptjs gherkin:init  (habilitar gherkin para el proyecto actual inicializado)
9. "basic.feature"
	Feature: checkout
	  In order to buy product
	  As a customer
	  I need to be able to checkout the selected products

	Scenario: order several products
		Given I have product with $600 price in my cart
		When I go to checkout process
		Then I should see that total number of products is 2
		
10. > codeceptjs gherkin:snippets   รณ   codeceptjs gherkin:snippets [--path=PATH] [--feature=PATH]   
	
	[--path=PATH] : path donde se generaran los steps del feature creado
	[--feature=PATH] : path del archivo feature especifico que se escaneara para crear steps
	
	"codecept.conf.js"
		gherkin: {
			features: './features/*.feature',
			steps: ['./step_definitions/steps.js']
		  },

11. > codeceptjs run --grep "@important"   (run especific features which contains tag @important)

12. >> npx codeceptjs run --steps  --grep "@Pedido"    (To run feature by tag)
	> npx codeceptjs gherkin:steps  (list all defined steps)
	> npx codeceptjs run --steps	(To run tests and see step-by step output)
	> npx codeceptjs run --debug	(To run tests and see step-by step output)

	...................
13. Ejecutar con uso de archivo "package.json"
	
	{
    "name": "art",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "testGlobalFlow": "codeceptjs run --steps --grep @MapearOpciones",
      "testLogin": "codeceptjs run --steps --grep @case1",
      "testLogin2": "codeceptjs run --steps"
	.......

14. npm run testGlobalFlow



para conectar a SQLSErver:
npm install mssql
npm install express

* se instalara dependencias en node_modules

en clase de coneccion:

//////////////////////////////////////////////////////////////////////////////

const sql = require("mssql");

const config = {
    user: 'usr_mobile',
    password: 'Belcorp2020$',
    server: 'AWNTS74', 
    database: 'BelcorpPeru'
}

let myquery = "select top 10 DocumentoIdentidad,Nombre from Usuario"

resultado = []
sql.connect(config).then((conn) => 
    conn.query(myquery)
        .then((v) => {            

            for (let i = 0; i < v.recordset.length; i++) {
                var obj = {Nombre: v.recordset[i].Nombre, DocumentoIdentidad: v.recordset[i].DocumentoIdentidad}    
                resultado.push(obj)              
            }

            MycallbackFix(null, resultado);

        }).then(() => conn.close())
)

function MycallbackFix(err, result) {
    
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].Nombre + ' > ' + result[i].DocumentoIdentidad);        
    }

}

//////////////////////////////////////////////////////////////////////////////

consumir un servicio con una funcion asincrona en archivo (A) y llamar a esa funcion desde otro archivo (B)
..........................................................................................................

Archivo (A)
----------
var request = require('request');

function doRequest() {

    var url = 'https://ws.somosbelcorp.com/api/Login';

    var headers = {
    'Content-Type' : 'text/plain'
    };

    var form = {
        grant_type : "password",
        username : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEb2N1bWVudG8iOiIwMDIwODI0NzE1In0.mCKtOmbtMlnWGIMHKQqrW69b9iinzUT4GgOguBjDMCY",
        pais : "CO",
        tipoAutenticacion : "3"
    };

    return new Promise(function (resolve, reject) {
    
        request.post({ url: url, form: form, headers: headers }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                resolve(body);
              } else {
                reject(error);
              }
        });    

    });
  }

  //exportar la funcion para ser llamada desde otro archivo
  module.exports.doRequest = doRequest



Archivo (B)
----------

const objvar = require('./probando_request')

async function main() {
    let res = await objvar.doRequest();
    var bodyValues = JSON.parse(res);
    console.log("nombreConsultora : " + bodyValues.nombreConsultora);
}
  
main();


















