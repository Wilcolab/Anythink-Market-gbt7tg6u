//TODO: seeds script should come here, so we'll be able to put some data in our local env
var Chance = require('/workspaces/Anythink-Market-gbt7tg6u/node_modules/chance/chance.js');
var chance = new Chance();
// i did

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
