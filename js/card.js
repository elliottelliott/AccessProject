
angular.module('cardDemo2', ['ngMaterial'])
.controller('AppCtrl', function($scope) {
  $scope.imagePath = 'img/bear.png';
});


angular 
	.module("MyApp")
	.controller("MyController",MyController);

function MyController() {
	this.greeting = "Oh Sweet Mercy Yes"
}