( function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', ['$scope', LunchCheckController]);

function LunchCheckController($scope) {

	$scope.lunchMenu = ''; // user's input
	$scope.message = ''; // message to be shown
	$scope.messageStyle = {}

	// function called by user's button click
	$scope.evaluateLunchMenu = function () {

		// split the list, remove empty items
		var items = $scope.lunchMenu.split(',')
			.filter(function (itm) {return itm != '';});

		if (items.length == 0) {
			$scope.messageStyle = {'color':'red'};
			$scope.message = "Please enter data first";
		} else {
			$scope.messageStyle = {'color':'green'};
			if (items.length <= 3) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}
		}
	}
}

})();

