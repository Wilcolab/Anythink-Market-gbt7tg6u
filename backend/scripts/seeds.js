//TODO: seeds script should come here, so we'll be able to put some data in our local env
var faker = require("faker");

var randomUsers = faker.internet.userName() ;
var randomProduct = faker.commerce.productName(); 
var randomComment = faker.name.Comment();

// const jsonData = JSON.stringify({
//   users,
//   product,
//   Comment,
//    });
//    console.log(jsonData);

//    faker.seed(100);

for(i = 0; i <= 100; i++) {
  console.log(andomUsers);
  console.log(randomProduct);
  console.log(randomComment);
};