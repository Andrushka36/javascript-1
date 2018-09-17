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
	detail: {
		'молоко': [50, 1],
		'мясо': [300, 2.5],
		'сыр': [400, 0.3],
		'хлеб': [40, 1],
		'бананы': [60, 1.5]
	},
	countPrice: function() {
		var products = this.detail, sum = 0;
		for (var product in products) {
			sum += products[product][0] * products[product][1];
		}
		return sum;
	},
	addProduct: function(name, price, count) {
		var products = this.detail;
		products[name] = [price, count];
		return products;
	},
	removeProduct: function(nameProduct) {
		var products = this.detail, count = arguments[1];
		if (products[nameProduct]) {
			if (!count || count == products[nameProduct][1]) {
				delete products[nameProduct];
			} else {
				products[nameProduct][1] -= count;
			};
			return products;
		};
		return 'Данного товара нет в корзине';
	}
}

//console.log(basket.addProduct('творог', 75, 1));

//console.log(basket.removeProduct('мясо'));

//console.log(basket.countPrice());