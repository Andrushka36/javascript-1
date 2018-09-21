// Задание № 1
function createTable() {
	var currentRow, chessBoard = document.getElementsByClassName("chess-board")[0],
		figures = ["Ладья", "Конь", "Слон", "Король", "Ферзь", "Слон", "Конь", "Ладья"],
		labels = ["A", "B", "C", "D", "E", "F", "G", "H"],
		newDiv = document.createElement("div");
		
		newDiv.className = "chess-board__game-field";
		chessBoard.appendChild(newDiv);
		
		var gameField = document.getElementsByClassName("chess-board__game-field")[0];
		
	for (var i = 0; i <= 7; i++) {		
		newDiv = document.createElement("div");
		newDiv.className = "chess-board__row";
		gameField.appendChild(newDiv);
		
		currentRow = document.getElementsByClassName("chess-board__row")[i];
		
		for (var j = 0; j <= 7; j++) {
			newDiv = document.createElement("div");
			newDiv.classList.add("chess-board__cell");
			if ((i + j) % 2 == 0) {
				newDiv.classList.add("chess-board__cell--white");
			};
			if (i == 0 || i == 7 ) {
				newDiv.innerHTML = figures[j];
			} else if (i == 1 || i == 6) {
				newDiv.innerHTML = "Пешка";
			};
			currentRow.appendChild(newDiv);
		};
	};
	
	var horizontalLabel = function(position) {
		newDiv = document.createElement("div");
		newDiv.className = "chess-board__hozional-label chess-board__hozional-label--" + position; 
		chessBoard.appendChild(newDiv);
		
		currentRow = document.getElementsByClassName("chess-board__hozional-label--" + position)[0];
		
		for (var i = -1; i <= 8; i++) {
			newDiv = document.createElement("div");
			newDiv.className = ("chess-board__cell");
			if (labels[i]) {
				newDiv.innerHTML = labels[i];
			};
			currentRow.appendChild(newDiv);
		};
	};
	
	horizontalLabel('top');
	horizontalLabel('bottom');
	
	var verticalLabel = function(position) {
		newDiv = document.createElement("div");
		newDiv.className = "chess-board__vertical-label chess-board__vertical-label--" + position;
		chessBoard.appendChild(newDiv);
		
		currentRow = document.getElementsByClassName("chess-board__vertical-label--" + position)[0];
		
		var i = 8;
		while (i >= 1) {
			newDiv = document.createElement("div");
			newDiv.className = ("chess-board__cell");
			newDiv.innerHTML = i--;
			currentRow.appendChild(newDiv);
		};		
	};
	
	verticalLabel('left');
	verticalLabel('right');
};

createTable();

// Задание № 2 и № 3
var products = [{
		id: 1,
		title: "творог",
		price: 75,
		count: 1
	}, {
		id: 2,
		title: "мясо",
		price: 300,
		count: 2.5
	}, {
		id: 3,
		title: "молоко",
		price: 55,
		count: 1
	}
];

var cart = {
	products: [],
	sum: 0,
	setProducts: function(products) {
		this.products = products;
		this.countPrice();
	},
	countPrice: function() {
		var sum = 0;
		
		for (var i = 0; i < this.products.length; i++) {
			sum += this.products[i].price * this.products[i].count;
		};
		
		this.sum = sum;
	},
	displaySum: function(id) {
		var str;
		
		if (this.sum) {			
			str = "<p>В корзине: " + this.products.length + " товара на сумму " +
			this.sum + " рублей</p>";
		} else {
			str = "<p>Корзина пуста</p>";
		};
		
		document.getElementById(id).innerHTML = str;
	},
	displayProducts:function(id) {
		if (this.sum) {
			var str = "<table><tr><th>Наименование</th><th>Цена</th><th>Количество</th><th>Стоимость</th></tr>";
			
			for (var i = 0; i < this.products.length; i++) {
				str += "<tr>";
				for (var prop in this.products[i]) {
					if (prop != 'id') {
						str += "<td>" + this.products[i][prop]+ "</td>";
					};
				};
				str += "<td>" + this.products[i].price * this.products[i].count + "</td></tr>";
			};
			
			str += "</table>";
			
			document.getElementById(id).innerHTML = str;
		};
	}
};

//cart.setProducts(products);
//cart.displayProducts("catalog");
//cart.displaySum("cart");