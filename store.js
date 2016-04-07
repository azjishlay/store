// 1. Node applications is a store owner application.

//     -> prompt npm package
//     -> Each item on the menu should have each of these things:

//             - Name
//             - Price
//             - Category

// 2. Node application that's a customer application

//     - > Prompt npm package
//     -> Ask you for your name, address, what you want, and how much 
//     -> Respond by telling you how much your total is

var prompt = require('prompt');
var fs = require('fs');

var menu = [];

fs.readFile("menu.txt", "utf-8", function (err, data) {

  menu = JSON.parse(data);
  // Array of JS objects

})

prompt.start();

prompt.get(['name', 'price', 'category'], function (err, result) {

  menu.push({
    name:result.name,
    price:result.price,
    category:result.category
  })

  fs.writeFile("menu.txt", JSON.stringify(menu), function(err){
    
    if(err){
      console.log(err);
    }
    else {
      console.log("Item added.");
    }
  })

});
