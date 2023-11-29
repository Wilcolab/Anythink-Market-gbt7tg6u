//TODO: seeds script should come here, so we'll be able to put some data in our local env
const faker = require('faker');

const users = faker.internet.users();
const product = faker.commerce.product();
const Comment = faker.name.Comment();

const jsonData = JSON.stringify({
  users,
  product,
  Comment,
   });
   console.log(jsonData);

   faker.seed(100);