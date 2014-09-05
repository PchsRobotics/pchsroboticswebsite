'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		
		$scope.myInterval = 5000;
  		var slides = $scope.slides = [];

		for(var i = 10; i < 83; i++){
			slides.push({
	  			image:'modules/core/img/robotpics/' + i + '.jpg',
				text:'Swag'
			});
		}
	}
]);
