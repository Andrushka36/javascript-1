window.addEventListener("load", onWindowLoad);

// Задание № 1, № 3

var previews = document.getElementsByClassName("gallery__small-image");

for (var i = 0; i < previews.length; i++) {
	previews[i].children[0].addEventListener("load", previewsOnLoad);
};

function previewsOnLoad(e) {
	e.target.isExist = true;;
};

function onWindowLoad() {
	var gallery = {
		changeImage: function(smallImage) {
			var bigImage = document.getElementsByClassName("gallery__big-image")[0],
				img = document.createElement("img"),
				src = (smallImage.isExist) ? smallImage.src : "images/no-image.png";
				
			img.setAttribute("src", src);
			
			if (bigImage.firstChild) {
				bigImage.replaceChild(img, bigImage.firstChild);
			} else {
				bigImage.appendChild(img);
			}
		},
		show: function() {
			var currentImage = 0;		
			
			this.changeImage(previews[0].children[0]);
			
			for (var i = 0; i < previews.length; i++) {
				previews[i].addEventListener("click", onPreviewsClick.bind(this));
				previews[i].position = i;
			};
			
			function onPreviewsClick(e) {				
				this.changeImage(e.target);
				currentImage = e.target.parentNode.position;
			};
			
			document.getElementsByClassName("gallery__button-prev")[0].addEventListener("click", onButtonPrevClick.bind(this));
			
			function onButtonPrevClick() {
				currentImage = (currentImage == 0) ? previews.length-1 : --currentImage;
				this.changeImage(previews[currentImage].children[0]);
			};
			
			document.getElementsByClassName("gallery__button-next")[0].addEventListener("click", onButtonNextClick.bind(this));
			
			function onButtonNextClick() {
				currentImage = (currentImage == previews.length-1) ? 0 : ++currentImage;
				this.changeImage(previews[currentImage].children[0]);
			};
		}
	};
	
	gallery.show();
	
	// Задание № 2
	
	var products = [{
			id: 1,
			title: "Творог",
			price: 75
		}, {
			id: 2,
			title: "Молоко",
			price: 55
		}, {
			id: 3,
			title: "Кефир",
			price: 54
		}
	],
	cart = {
		products: [],
		sum: 0,
		countPrice: function() {
			var sum = 0;
			
			for (var i = 0; i < this.products.length; i++) {
				sum += this.products[i].cost;
			};
			
			this.sum = sum;
		},
		getProductById: function(products, productId) {
			for (var i = 0; i < products.length; i++) {
				if (productId == products[i].id) {
					return products[i];
				};
			};
			
			return false;
		},
		addProduct: function(product) {			
			var item = this.getProductById(this.products, product.id),
				tr = document.createElement("tr");
			
			if (!document.getElementById("cart")) {
				var table = document.createElement("table");
				
				table.setAttribute("id", "cart");
				table.innerHTML = "<tr><th>Наименование</th><th>Цена</th><th>Количество</th><th>Стоимость</th></tr>" +
									"<tr><th>Всего</th><th colspan='2'></th><th></th></tr>";
				
				document.getElementById("catalog").appendChild(table);
			};
			
			var tableCart = document.getElementById("cart");
			
			if (!item) {
				item = {};
				item.id = product.id;
				item.title = product.title;
				item.price = product.price;
				item.count = 1;
				item.cost = product.price;
				this.products.push(item);
				
				var tr = document.createElement("tr");
				tr.setAttribute("id", "product-item-" + item.id);
				tr.innerHTML = "";
				tableCart.children[0].insertBefore(tr, tableCart.children[0].lastChild);
				
				for (var prop in item) {
					if (prop == "id") continue;
					tr.innerHTML += "<td>" + item[prop] + "</td>";
				};
			} else {
				document.getElementById("product-item-" + item.id).children[2].innerHTML = ++item.count;
				item.cost += product.price;
				document.getElementById("product-item-" + item.id).children[3].innerHTML = item.cost;
			};
			
			this.countPrice();
			
			tableCart.children[0].lastChild.lastChild.innerHTML = this.sum;
		},
		on: function() {			
			var buttonAdd = document.getElementsByClassName("product__add");
			
			for (var i = 0; i < buttonAdd.length; i++) {
				buttonAdd[i].addEventListener("click", onButtonAddClick.bind(this));
			};
			
			function onButtonAddClick(e) {
				var productId = e.target.parentNode.getAttribute("id").split("-")[1];
				
				var product = this.getProductById(products, productId);
				
				this.addProduct(product);
			};
		}
	};
	
	cart.on();
}