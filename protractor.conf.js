const SpecReporter = require('jasmine-spec-reporter').SpecReporter
var AllureReporter = require('jasmine-allure-reporter')


exports.config = {
    frameWork: 'jasmine2',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000,
        print: function(){
        }
    },

    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new SpecReporter({
                spec: {
                    displayStacktrace: true,
                },
                summary: {
                    displayDuration:false,
                }
            })
        ),
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
    'browserName': 'chrome'
    },
    specs: ['specs/*.spec.js'],
    baseUrl: 'http://www.protractortest.org/',
};