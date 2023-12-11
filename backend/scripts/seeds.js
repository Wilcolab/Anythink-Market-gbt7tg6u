//TODO: seeds script should come here, so we'll be able to put some data in our local env
import Chance from 'chance';
var chance = new Chance();


function main() {
    Array.from( { length:100 }).map(async (i) => {
        await chance.user.create({
            data: {
                user: chance.name.user(),
                product: chance.commerce.product,
                comment: chance.lorem.comment,
            },
        });
    });
}

main();
