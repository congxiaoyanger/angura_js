var app = angular.module('angurajs_Module', []);

app.controller('HelloAngurajs', ['$scope', function($scope) {
	
	$scope.greeting = {
			text : 'hello...',
			hello : 'hello.'
	}
    $scope.name = 'John Doe'
    	
}]);