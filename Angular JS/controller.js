console.log("hdshjhsjds",window.location.href)
var new_obj = angular.module('my_app',['ngRoute']); /*adding the ngRoute to the dependancy list*/
new_obj.config(['$routeProvider',function($routeProvider,$locationProvider){
	$routeProvider.when('#/',{

		template: 'welcome user !', /*if we use both template has the priority*/
		templateUrl: 'url to the file ' /*This is used for the redirecting to another page using the AJS like it will initialize an ajax request to the file that is specified in the templateUrl*/
	}).when('/anotherpage',{
		template:'welcome user ,again !'
	}).otherwise({
		redirectTo:'/'
	})
	$locationProvider.html5Mode(true);

}]);
