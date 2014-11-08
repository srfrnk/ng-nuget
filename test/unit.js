describe("ng-module", function () {
    beforeEach(function () {
        module("ng.nuget");
        module('test/directive.html');
    });

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
            this.element=angular.element("<div></div>");
            this.element.append(angular.element(this.$templateCache.get(templatePath)));
            this.$compile(this.element)(this.scope);
            this.scope.$digest();
        };

        this.injectService("$window", "$templateCache", "$rootScope", "$compile");
        this.scope=this.$rootScope.$new();
    });

    it("should embed in all instances", function () {
        this.scope.items=[{id:1,title:'1',value:'1'},{id:4,title:'4',value:'4'},{id:3,title:'3',value:'3'}];
        this.loadElement("test/directive.html");
        expect(this.element.find(".nuget-instance").length).toBe(4);
    });

    it("should embed in all instances", function () {
        this.scope.items=[];
        this.loadElement("test/directive.html");
        expect(this.element.find(".nuget-instance").length).toBe(1);
    });

    it("should bind values", function () {
        this.scope.items=[{id:1,title:'1',value:'1'},{id:4,title:'4',value:'4'},{id:3,title:'3',value:'3'}];
        this.loadElement("test/directive.html");
        expect(this.element.find(".nuget-instance[item-id='3'] .title").html()).toBe('3');
    });

    it("should transclude", function () {
        this.scope.items=[];
        this.loadElement("test/directive.html");
        expect(this.element.find(".primary .my-primary").length).toBe(1);
        expect(this.element.find(".secondary .my-secondary").length).toBe(1);
    });

    it("should bind transcluded", function () {
        this.scope.items=[];
        this.loadElement("test/directive.html");
        expect(this.element.find(".primary .my-primary").text()).toBe("primary 1234");
        expect(this.element.find(".secondary .my-secondary").text()).toBe("secondary 1234");
    });
});
