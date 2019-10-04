exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.facebook.com/messages/t/EsikaCyzoneLbelBot',      
      windowSize: "1280x960",
      show: false,
      waitForNavigation: "networkidle0",
      chrome: {
        args: [
              '--use-fake-ui-for-media-stream',
              '--disable-web-security',
              '--disable-notifications',
              '--use-fake-device-for-media-stream',
              '--allow-file-access-from-files',
              '--allow-running-insecure-content',
              '--window-size=1280,960'
              ]
      }
    }
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/globalFlow_steps.js','./step_definitions/chatFlow_steps.js','./step_definitions/pedidos_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'AutoTestChatbot'
}