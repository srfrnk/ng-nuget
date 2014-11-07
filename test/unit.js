describe("ng-module", function () {
    beforeEach(function () {
        this.injectService = function () {
            var services = Array.prototype.slice.call(arguments);
            services.push(function () {
                for (i = 0; i < services.length - 1; i++) {
                    this[services[i]] = arguments[i];
                }
            });
            inject(services);
        };
        this.loadElement = function (templatePath) {
            return angular.element(this.$templateCache.get(templatePath));
        };

        this.loadElement = function (templatePath) {
            var elm = angular.element(this.$templateCache.get(templatePath));
            $j("body").append(elm);
            return elm;
        };
        this.compile = function (scope) {
            this.$compile($j(document))(scope||this.$rootScope);
            (scope||this.$rootScope).$digest();
        };

    });

    beforeEach(function () {
        module("ng.nuget");
        module('test/directive.html');
        this.injectService("$window", "$templateCache", "$rootScope", "$compile");
    });

    it("should embed in all instances", function () {
        this.loadElement("test/directive.html");
        var scope=this.$rootScope.$new();
        scope.items=[{id:1,title:'1',value:'1'},{id:4,title:'4',value:'4'},{id:3,title:'3',value:'3'}];
        this.compile(scope);
        expect($j(".nuget-instance").length).toBe(4);
    });

    it("should bind values", function () {
        this.loadElement("test/directive.html");
        var scope=this.$rootScope.$new();
        scope.items=[{id:1,title:'1',value:'1'},{id:4,title:'4',value:'4'},{id:3,title:'3',value:'3'}];
        this.compile(scope);
        expect($j(".nuget-instance[item-id='3'] .title").html()).toBe('3');
    });
});
