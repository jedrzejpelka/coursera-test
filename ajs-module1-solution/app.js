( function () {
'use strict';

var lunchCheck = angular.module('LunchCheck', []);

lunchCheck.controller('LunchCheckController', function ($scope) {
	$scope.lunchMenu = '';
	$scope.message = '';
	$scope.evaluateLunchMenu = function () {
		$scope.message = "zzz";
	}
})

})();