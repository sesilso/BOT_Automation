# BOT_Automation
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
