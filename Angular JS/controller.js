console.log("hdshjhsjds",window.location.href)
var new_obj = angular.module('my_app',['ngRoute']); /*adding the ngRoute to the dependancy list*/
new_obj.config(['$routeProvider',function($routeProvider,$locationProvider){
	$routeProvider.when('/',{

		// template: 'welcome user !', /*if we use both template has the priority*/

		// templateUrl: 'url to the file ' /*This is used for the redirecting to another page using the AJS like it will initialize an ajax request to the file that is specified in the templateUrl*/
		// most important is the conditional routing because when checking with the AJS for forms we can prevent the initial login but cannot prevent the url rerouting like manual so to prevent that we can add the condition in the ngRoute as folllows

		templateUrl: 'login.html'

	}).when('/anotherpage',{
		template:'welcome user ,again !'
	}).when('/dashboard',{
		// resolve is used for conditional routing
		resolve :{
			"check":function($location,$routeScope){
				if (!$routeScope.loggedIn){
					$location.path('/')
				}
		},
		templateUrl: 'dashboard.html'
	})


	.otherwise({
		redirectTo:'/'
	})
	$locationProvider.html5Mode(true);

}]);

new_obj.controller('logincontroller',function($scope,$location,$routeScope){
	// when the click submit is fired the AJS function is fired
	// location is used to change the path that is url
	$scope.on_submit = function(){

		// use the $routeScope so that it can be accessed from anywhere

		// var user = $scope.username;
		$routeScope.user = $scope.username;
		$routeScope.pass = $scope.passord;
		if ($scope.username == 'admin' && $scope.password == 'admin'){
			$routeScope.loggedIn = true;
			$location.path('/dashboard')
		}else{
			alert("please enter the correct credentials")
		}
	}


});
