// Задание № 3
function action(a,b) {
	if (a >= 0 && b >= 0) {
		return a-b;
	} else if (a < 0 && b < 0) {
		return a*b;
	} else {
		return a+b;
	}
};

console.log(action(10, 5));
console.log(action(-9, -2));
console.log(action(10, -3));

// Задание № 4
var a = 10;
switch (a) {
	case 0:
		console.log(0);
	case 1:
		console.log(1);
	case 2:
		console.log(2);
	case 3:
		console.log(3);
	case 4:
		console.log(4);
	case 5:
		console.log(5);
	case 6:
		console.log(6);
	case 7:
		console.log(8);
	case 8:
		console.log(8);
	case 9:
		console.log(9);
	case 10:
		console.log(10);
	case 11:
		console.log(11);
	case 12:
		console.log(12);
	case 13:
		console.log(13);
	case 14:
		console.log(14);
	default:
		console.log(15);
};

// Задание № 5
function sum(a,b) {
	return a+b;
};

function def(a,b) {
	return a-b;
};

function mul(a,b) {
	return a*b;
};

function div(a,b) {
	return a/b;
};

// Задание № 6
function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case 'sum':
			return sum(arg1,arg2);
			break;
		case 'def':
			return def(arg1,arg2);
			break;
		case 'mul':
			return mul(arg1,arg2);
			break;
		case 'div':
			return div(arg1,arg2);
	}
};

// Задание № 8
function power(val, pow) {	
	if (pow > 0) {
		return val*power(val, --pow);
	} else {
		return 1;
	}
};

console.log(power(2,6));