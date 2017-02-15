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
			}
		},
		templateUrl: 'dashboard.html'
	})


	.otherwise({
		redirectTo:'/'
	})

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

// using the http service in the controller
new_obj.controller("people",function($scope,$http){
	console.log("dgshgdhsg",$http)
	// getting the file using the path to the file and adding that to the persons variable defined in the html
	$http.get("database.json").success(function(responce){

		$scope.persons = responce.records;

	})


})



// For the advanced search box - loading the file from a variable 


var Flex = {
	"records": [
		{
			"Name":"napster",
			"Age" : 18,
			"fav_color":"red"
		},
		{
			"Name": "xere",
			"Age":27,
			"fav_color":"green"
		},
		{
			"Name": "Ace",
			"Age":29,
			"fav_color":"orange"
		}

	]
}


new_obj.controller("favourites",function($scope){
	$scope.persons = Flex.records;

});


new_obj.controller("range",function($scpoe){
	var range = 10;
	var myRange = [];
	for(i=0;i<range;++i){

		myRange.push(i);
	}
	$scope.myRange = myRange;

	// we can also define a array using the Array tag like below
	a= new Array(10); /*it will define 10 undefined indexes*/
	$scope.range_index = a;

})

new_obj.controller('watch', ['$scope', function($scope){
	$scope.counter=0;
	// wacthing the mytext usingthe AJS watch
	$scope.$watch("mytext",function(newValue,oldValue){
		console.log('New',newValue);
		console.log('Old',oldValue);
		$scop.counter++;
	})

}]);

new_obj.controller('digest', ['$scope', function($scope){

	$scope.my_random_number = Math.random();
	
// when implimenting something in the vanila js the below code doesn't work becasuse the AJS scope and the vanila js scope are two different so we use the digest method in the AJS and this is also used in the ajax request and other button clicks .

	document.querySelector('#digest_button').addEventlistener('click',function(){ /*we do not need to pass the scope again because it is already available in the function above*/
		$scope.my_random_number =  Math.random();
		// if the digest function is not called then this change will not take effect
		$scope.$digest(); 
	},false);
	
}]);

// creating the service first you can't have services available for another modules,this can be available for only this module only.

new_obj.service('service_name', function(){
	var num  = Math.floor(Math.random()*10)	;
	// in here the this keyword reference to the service in the function and we can pass this service to any of the controllers we can use another method instead of this
	this.generte =  function(){
		return num
	}
});

// passing the service_name to the controller
new_obj.controller('services', function($scope,service_name){
	$scope.create_random = function(){
		// geting the random number from the service and also remember that the services are singleton that is only works once and we have to refresh the page
		$scope.random_number = service_name.generate();

	}
});

