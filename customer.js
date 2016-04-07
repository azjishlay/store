var fs = require('fs');
var prompt = require('prompt');

var menu = [];
var item;
var quantity;
var total = 0;

fs.readFile("menu.txt", "utf-8", function (err, data) {

  menu = JSON.parse(data);
  // Array of JS objects\
  // POJO

})

prompt.start();

prompt.get(['name', 'address', 'order','quantity'], function (err, result) {

	// console.log(menu);

		item = result.order;
		quantity = parseInt(result.quantity);

		menu.forEach(function (menuItem) {
      if (menuItem.name === item) {
        total = menuItem.price * quantity;
      }
    });

    console.log("your total is " + total);   
	});