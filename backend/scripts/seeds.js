//TODO: seeds script should come here, so we'll be able to put some data in our local env
const faker = require('faker');

const title = faker.name.title();
const description = faker.name.description();

const jsonData = JSON.stringify({
  title,
  description,
   });
   console.log(jsonData);

   faker.seed(100);