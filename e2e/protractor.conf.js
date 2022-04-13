// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    // './src/app.e2e-spec.ts',
    // './src/test/lista-productos.e2e-spec.ts',
    // './src/test/historial-compras.e2e-spec.ts',
    // './src/test/carrito-compras.e2e-spec.ts',
    './src/**/*.e2e-spec.ts',
  ],
  capabilities: {
    browserName: 'chrome',
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: () => {
      console.log('Testing');
    },
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json'),
    });
    jasmine
      .getEnv()
      // @ts-ignore
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(
      // @ts-ignore
      new HtmlReporter({
        baseDirectory: 'tmp/screenshots',
      }).getJasmine2Reporter()
    );
  },
};
