angular.module("exampleServices", ["leaflet-directive", "ngResource"]).factory('pointsService', ['$resource', function($resource) {
    console.log(" Factory $resource GET");
    //return $resource('http://schoolus.local\\:3001/schools', {}, {
    return $resource('points.json', {}, {
        query: {method:'GET', isArray:true}
    })
}]);
