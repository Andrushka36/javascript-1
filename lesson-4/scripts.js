// Задание № 1
var number = 136;

function transformToObject(number) {
	var objectNumber = {};
	if (number < 0 || number > 999) {
		console.log('Введенное вами число вне заданного диапазона')
		return {};
	};
	var i = number.toString().length-1;
	objectNumber = {
		'единицы': 0,
		'десятки': 0,
		'сотни': 0
	};
	for (var prop in objectNumber) {
		if (number.toString()[i]) {
			objectNumber[prop] = +number.toString()[i--];
		}
	};
	return objectNumber;
}

//console.log(transformToObject(number));

// Задание № 2

var basket = {
	detail: [
		['Молоко', 50, 1],
		['Мясо', 300, 2.5],
		['Сыр', 400, 0.3],
		['Хлеб', 40, 1],
		['Бананы', 60, 1.5]
	],
	countPrice: function() {
		var products = this.detail, sum = 0;
		for (var i = 0; i < products.length; i++) {
			sum += products[i][1] * products[i][2];
		};
		return sum;
	},
	addProduct: function(name, price, count) {
		var products = this.detail;
		products.push([name, price, count]);
		return products;
	},
	findNumber: function(name) {
		var products = this.detail;
		for (var i = 0; i < products.length; i++) {
			if (name.toUpperCase() == products[i]["0"].toUpperCase()) {
				return i;
			}
		};
		return -1;
	},
	removeProduct: function(name) {
		var productNumber = this.findNumber(name), products = this.detail, count = arguments[1];
		if (productNumber != -1) {
			if (!count || count == products[productNumber][2]) {
				products.splice(productNumber, 1);
			} else {
				products[productNumber][2] -= count;
			};
			return products;
		} else {
			return 'Данного товара нет в корзине';
		}
	}
}

//console.log(basket.addProduct('творог', 75, 1));

//console.log(basket.removeProduct('мясо'));

console.log(basket.countPrice());