var app = angular.module('todo_list',[]);

app.controller('todo', ['$scope', function($scope){

	$scope.tasks = [];

	$scope.searchEnter = function(){
		
	// defining the function in the $scope

		$scope.addTask = function(){
			$scope.tasks.push($scope.task_name);
			console.log($scope.task)
		}


		// checking which key is pressed enter keycode is 13

		console.log(event.which || event.keyCode);
		if (event.which ==13){
			// calling a function for adding the task below
			$scope.addTask();
		}
	}
}])