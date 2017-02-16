var app = angular.module('todo_list',[]);

app.controller('todo', ['$scope', function($scope){

	$scope.tasks = [];

	$scope.searchEnter = function(){ 
		
	// defining the function in the $scope

		$scope.addTask = function(){
			// making the task as read or not read
			$scope.tasks.push({'task_text':$scope.task_name,'status':false});
			console.log($scope.task_name)
			console.log($scope.tasks)
		}


		// checking which key is pressed enter keycode is 13

		console.log(event.which || event.keyCode);
		if (event.which == 13 && $scope.task_name != ''){

			// calling a function for adding the task below
			$scope.addTask();
			// clear the input field after the  push
			$scope.task_name = ''
		}
		$scope.contentEdit = function(){
 
			if(event.target.contentEditable =='false'){
				event.target.contentEditable ="true";
			}else{
				event.target.contentEditable ="false";
			}
		}

		 
		$scope.doneEnter=function(){
			if (event.which == 13 && $scope.task_text != ''){		
			$scope.contentEdit();
		}
		};

		 
	}
}])