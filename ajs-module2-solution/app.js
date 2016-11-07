( function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var ctrl = this;

	ctrl.items = ShoppingListCheckOffService.getItemsToBuy();

	ctrl.checkOffItem = function (index) {
		ShoppingListCheckOffService.checkOffItem(index);
	}
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var ctrl = this;

	ctrl.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
	var service = this;

	// pre-populated lists of items
	var itemsToBuy = [
		{name: "cookies", quantity: 10},
		{name: "elephant loin", quantity: "5 kg"},
		{name: "gas masks", quantity: 3},
		{name: "quail eggs", quantity: 19},
		{name: "lead pipe", quantity: "4 meters"},
		{name: "rectified spirit", quantity: "½ litre"},
		{name: "screwdrivers", quantity: 2}
	];
	var itemsBought = [];

	service.getItemsToBuy = function () {
		return itemsToBuy;
	}

	service.getBoughtItems = function () {
		return itemsBought;
	}

	service.checkOffItem = function (index) {
		itemsBought.push(itemsToBuy[index]);
		itemsToBuy.splice(index, 1);
	}

}



})();