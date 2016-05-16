"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', ['$scope', function($scope){
	console.log('hello');
	$scope.randomValue=-999;
	
	this.newlist=["sunday","monday","tuesday"];

	this.user1={
		name:'billy joe',
		number: 123
	
	};

}]);

angular.module('myApp').filter('first', function(){
	var result=null;
	return function(value){
	
	result=value+"ar";
		return result;};
});