'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		
		$scope.myInterval = 5000;
  		var slides = $scope.slides = [];
  		slides.push({
	  		image:'http://thepetcollective.tv/wp-content/uploads/2013/09/inbred-white-tiger-kenny-1.jpg',
			text:'This is a tiger with downs syndrome'
		});
	}
]);
