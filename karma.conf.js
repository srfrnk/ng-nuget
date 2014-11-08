module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine-jquery','jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            '*.js',
            'test/**/*.html',
            'test/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],
        preprocessors: {
          'test/**/*.html': 'ng-html2js'
        },
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,
        plugins: [
            'karma-jasmine',
            'karma-jasmine-jquery',
            'karma-nested-reporter',
            'karma-phantomjs-launcher',
            'karma-ng-html2js-preprocessor'
        ],
        reporters: ['nested'],
        nestedReporter: {
            color: {
                should: 'red',
                browser: 'yellow'
            },
            icon: {
                failure: '✘ ',
                indent: 'ட ',
                browser: ''
            }
        }
/*
        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'public/',
            stripSufix: '.ext',
            // prepend this to the
            prependPrefix: 'served/',

            // or define a custom transform function
            //cacheIdFromPath: function(filepath) {
            //    return cacheId;
            //},

            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('foo')
            moduleName: 'foo'
        }
*/
    });
};
