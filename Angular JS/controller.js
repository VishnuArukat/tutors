console.log("hdshjhsjds",window.location.href)
var new_obj = angular.module('my_app',['ngRoute','ngAnimte','ngCookies']); /*adding the ngRoute to the dependancy list*/
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
	// in here the this keyword reference to the service in the function and we can pass this service to any of the controllers we can use another method instead of this which is the factories
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

// FACTORIES IN THE AJS
// ==================
// factories are also singelton and it is same as the service

new_obj.factory('factory_name', function(){
	// as in the service we use an object instead of the this operator
	var new_object = {}; /*initializing the object as empty we can add functions and var for the object*/
	var num  = Math.floor(Math.random()*10)	;
	new_object.generte =  function(){
		return num
	}
	// returning the new_object as it is accessed from the outer scope
	return new_object;
});

// passing the service_name to the controller
new_obj.controller('factories', function($scope,factory_name){
	$scope.create_random = function(){
		// geting the random number from the service and also remember that the services are singleton that is only works once and we have to refresh the page
		$scope.random_number = factory_name.generate();

	}
});


// PROVIDERS IN THE AJS

new_obj.provider('provider_name',function(){
	// need to return the code to the injector. injector is the one handles the provider
	var greet;
	return {/*returns the provider value*/
// this $get function is inbuild and it is automatically executed by the injector and so the function corresponding to that
		$get: function(){
			return {/*returns the injector value*/
				// setgreeting function is private function and can not be accessed from the controller and the injector doesn't execute this function it only executes the $get function.
				// to access the setgreeting function we can access it from the config function like normal
				setgreeting:function(value){
					greet = value;
				},
				// this is the object that returns so we can create any var or function for that can be used in the code
				showDate:function(){
					var date = new Date();
					// this function can access the greet var from the above
					return greet+ 'its'+ date.getHour(); /*returns the date value*/
				},
				devshowDate:function(){
					var date = new Date();
					// this function can access the greet var from the above
					return date.getHour(); /*returns the date value*/
				}
			}
		}
	}
});


// Accessing the provider in the config function
// and the synatx is <providername>Provider  --> here the Provider suffix needs to be added.
new_obj.config(['provider_nameProvider',function(provider_nameProvider) {
	console.log("provider",provider_nameProvider);/*thuis will return an object which consist of every function defined in the provider*/
	// accessing the $get function from the proovider
	var time = provider_nameProvider.$get().devshowDate();
	if (time > 0 && time <12){

		provider_nameProvider.setgreeting('good morning')
	}else{
		provider_nameProvider.setgreeting('good afternoon')
	}
	

}])

// we can provide the provider in the controller
new_obj.controller('provider',function($scope,provider_name){
	// calling the function from the prvider of AJS
	$scope.greet_message = provider_name.showDate();
})


// ng-show

new_obj.controller('ngshow', ['$scope', function($scope){
	$scope.show = 'msg1';
	$scope.togglevalue = function(){
		
		$scope.show = $scope.show == 'msg1' ? 'msg2': 'msg1'; 
	}
}])


// creating a filter
// accepts two arguments filter name and a function
new_obj.filter('base',function(){
	var filter_function  = function(input,base){
		var parsed =  parseInt(input,10);
		var based = parseInt(base,10);
		if (isNaN(parsed)||isNaN(based) || based <=1 || based >= 37){
			// return input
			return "ERROR invalid base !!"
		}
		// in below the parsed number is converted as in the base and converted to string and returns the value
		// based must be between the 2 and 36
		return parsed.toString(based)
	}
	return filter_function;
})


// Custom Directive
new_obj.directive("DirectiveName",function(){
	function linkFunction(scope,elem,attrs){
		// AJS uses the JQlite js which is the subset of the jquery and the bind function below is come from the jqlite
		elem.bind("<!--  -->lick",function(){
			alert(elem[0].innerHTML);
			// only changing the clicked directive element
			$scope.name  = $scope.controllerProperty;

		})
	}
// returning the directive
return{
	template:"Hello World !! {{name}}",
	restrict:'EA',
	scope:true, /*seperate scope for each directive which can have as an object*/
	link:linkFunction
}

})


new_obj.controller('directives', ['$scope', function($scope){
	$scope.controllerProperty = "This is a controller specific property"
}])


// Args in the scope property in the custom directive in the AJS

new_obj.directive("ScopeargsTest",function(){
	return{
		restrict:'EA',
		scope:{
			name : '@', /* this gets the data from the controller as it has the name property in that but it does not change the property in the controller*/
			age :'=',
			func:'&' /*This is for oneway binding the function from the controller*/
		},
		template:["<p>value of the directive is {{name}}</p>",'<p>Enter the new name : <input type ="text" ng-model="name"></p>',"<p>value of age in the directive is {{age}}</p>",'<p>Enter the new age : <input type ="text" ng-model="age"></p>',' <button  value= "from directive" ng-click= "func()"></button>'].join('') /*this only change the directive property not the controller property that is why @ is a text bind*/

	}
})

new_obj.controller('scopeargs', ['$scope', function($scope){
	$scope.name = "napster";
	$scope.age = "24";
	$scope.alertThename = function(){
			alert($scope.name);
	}
}])




// Adding AJS animation in the page

new_obj.controller('animateajs', function($scope){
	$scope.foods = ['pizza','burger','soda',;'fries'];
})

new_obj.controller('cookiesajs', function($scope,$cookies){
	$scope.myCookieVal = $cookies.get('cookie');
	$scope.setCookie = function(val){
		$cookies.put('cookie',val)
	}
})