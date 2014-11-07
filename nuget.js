(function (angular) {
    "use strict";
    var nugets = [];
    
    angular.module("ng.nuget", [])
        .directive('nuget', [function () {
            return {
                restrict: "E",
                transclude: true,
                link: function (scope, elm, attrs, ctrl, transclude) {
                    nugets.push({
                        name: attrs.name,
                        data: (attrs.data||"").split(','),
                        transclude: transclude
                    });
                }
            };
        }]).directive('nuget', [function () {
            return {
                restrict: "A",
                link: function (scope, elm, attrs) {
                    var nuget = nugets.filter(function (nugetI) {
                        return nugetI.name == attrs.nuget;
                    })[0];
     
                    var newScope = scope.$new();
     
                    newScope.nugetData = nuget.data.reduce(function (map, attr) {
                        var value;
                        if (attr[0] == '*') {
                            attr = attr.slice(1);
                            value = scope.$eval(attrs[attr]);
                        }
                        else {
                            value = attrs[attr];
                        }
                        map[attr] = value;
                        return map;
                    }, {});
     
                    elm.replaceWith(nuget.transclude(newScope, function () {}));
                }
            };
        }]);    
})(angular);
