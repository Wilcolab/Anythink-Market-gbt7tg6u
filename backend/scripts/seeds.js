//TODO: seeds script should come here, so we'll be able to put some data in our local env
const faker = require("faker");

const userName = faker.internet.userName() ;
const product = faker.commerce.productName(); 
const Comment = faker.name.Comment();

// const jsonData = JSON.stringify({
//   users,
//   product,
//   Comment,
//    });
//    console.log(jsonData);

   faker.seed(100);

// for(i = 0; i <= 100; i++) {
//   console.log(andomUsers);
//   console.log(randomProduct);
//   console.log(randomComment);
// };
console.log(`userName: {$userName}, product: {$productName}, comment: {$comment}`);