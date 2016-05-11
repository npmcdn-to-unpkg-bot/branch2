"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', ['$scope','$interval', function($scope,$interval){
	console.log('hello');
	$scope.randomValue=-999;
	$scope.number=1;
	
	$interval(function(){
		$scope.randomValue=Math.round(Math.random() * 100);
	},2000);
	
	
	$scope.sayHowdy=function(name){
		return $scope.message+ ' '+ name;
	};
	
		$scope.addNum=function(){
		$scope.message2=days[$scope.index];
		return $scope.message2;
	};

}]);
