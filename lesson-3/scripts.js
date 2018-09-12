// Задание № 1
var k = 0, result = '';

function isPrimeNumber(a) {
	if (a <= 1 ) {
		return false;
	} else {
		for (var i = 2; i < a; i++) {
			if (a % i == 0) return false;
		};
		return true;
	}
};

while (k < 100) {
	if (isPrimeNumber(k)) {
		result += k + ' ';
	}
	k++;
};

console.log(result);

// Задание № 2
var basket = [
	["milk", 50],
	["meat", 300],
	["cheese", 400],
	["bread", 40],
	["banana", 60]
];

function  countBasketPrice(basket) {
	var sum = 0;
	for (var i = 0; i < basket.length; i++) {
		sum += basket[i][1];
	};
	return sum;
};

//console.log(countBasketPrice(basket));

// Задание № 3
for (var i = 0; i <= 9; console.log(i++)) {
	
};

// Задание № 4
var x = '';

for (var i = 0; i < 20; i++) {
	x += 'x';
	console.log(x);
}