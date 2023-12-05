//TODO: seeds script should come here, so we'll be able to put some data in our local env
var Chance = require ('chance');
const chanceObj = new Chance();

const generatePerson = () => {
    return {
        "users": chanceObj.users(),
        "products": chanceObj.provinces(),
        "comments": chanceObj.comments(),
    };
};

const  dom = generatePerson();
console.log(dom);
// t
// var Chance = require ('chance');
// var chance = new Chance();

// console.log(chance.integer());
// console.log(chance.products(100));
// console.log(chance.comments(100));