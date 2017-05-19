var app = angular.module('myApp', []);

app.controller('HelloAngurajs', function($scope) {
	
	$scope.greeting = {
			text : 'hello...',
			hello : 'hello.'
	}
    $scope.name = 'John Doe'
    	
});