//TODO: seeds script should come here, so we'll be able to put some data in our local env
import { helpers, commerce, lorem } from 'faker';


const userData = helpers.contextualCard();
const product = commerce.product();
const fakeComment = lorem.sentence();


for (i = 0; i < 100; i++) {
	console.log(userData); // Outputs a random name
	console.log(product); // Outputs a random email
	console.log(fakeComment); // Outputs the random product name generated
	
}