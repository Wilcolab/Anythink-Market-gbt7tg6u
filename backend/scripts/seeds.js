//TODO: seeds script should come here, so we'll be able to put some data in our local env
const faker = require('faker');


const userData = faker.helpers.contextualCard();
const product = faker.commerce.product();
const fakeComment = faker.lorem.sentence();


for (i = 0; i < 100; i++) {
	console.log(ruserData); // Outputs a random name
	console.log(product); // Outputs a random email
	console.log(fakeComment); // Outputs the random product name generated
	
}