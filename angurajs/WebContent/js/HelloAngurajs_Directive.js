var app = angular.module('my_Module', []);

app.directive("hello", function() {
	return {
			restrict : 'E',
			template: '<div> this is directive.</div>',
			replace : true
	}
    	
});