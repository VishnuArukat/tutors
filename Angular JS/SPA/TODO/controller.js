var app = angular.module('todo_list',[]);

app.controller('todo', ['$scope', function($scope){

	$scope.tasks = [];
	// localStorage is an inbuild key that is used to store the data
	var taskData = localStorage['task_list'];
	if (taskData !== undefined){
		$scope.tasks = JSON.parse(taskData);
	}
	$scope.searchEnter = function(){ 
		
	// defining the function in the $scope

		$scope.addTask = function(){
			// making the task as read or not read
			$scope.tasks.push({'task_text':$scope.task_name,'status':false});
			console.log($scope.task_name)
			console.log($scope.tasks)
			// add the data to the local storage whenever a task is added to the list conerting to string
			localStorage['task_list'] = JSON.stringify($scope.tasks);
			console.log("localstorage",localStorage)
		}


		// checking which key is pressed enter keycode is 13

		console.log(event.which || event.keyCode);
		if (event.which == 13 && $scope.task_name != ''){

			// calling a function for adding the task below
			$scope.addTask();
			// clear the input field after the  push
			$scope.task_name = ''
			
		}
		$scope.contentEdit = function(current){
			console.log("$scope.tasks",event.target.innerText) 			
 			for (i=0;i<$scope.tasks.length;++i){

 				if($scope.tasks[i].task_text ==current){
 					$scope.tasks[i].task_text = event.target.innerText;
 				}
 			}
 			localStorage['task_list'] = JSON.stringify($scope.tasks);
 			// $scope.tasks.indexOf(current)
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