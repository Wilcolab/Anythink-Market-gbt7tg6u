//TODO: seeds script should come here, so we'll be able to put some data in our local env
var faker = require('./node_modules/faker');
// const faker = new Faker();

function main() {
    Array.from( { length:100 }).map(async (i) => {
        await faker.user.create({
            data: {
                user: faker.name.user(),
                product: faker.commerce.product,
                comment: faker.lorem.comment,
            },
        });
    });
}

main();
