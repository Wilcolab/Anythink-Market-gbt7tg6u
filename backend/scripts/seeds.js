//TODO: seeds script should come here, so we'll be able to put some data in our local env
const faker = require ('faker');

app.get("/users", (req, res, next) => {
    faker.seed(100);
    res.json(getUsers());
});

app.get("/products", (req, res, next) => {
    faker.seed(100);
    res.json(Products());
});

app.get("/comments", (req, res, next) => {
    faker.seed(100);
    res.json(getComments());
});