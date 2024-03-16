"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter = (0, express_1.Router)();
productRouter.get('/', (req, res) => {
    res.send('Get a list of products');
});
productRouter.get('/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Get product ${id}`);
});
productRouter.post('/', (req, res) => {
    let id = req.body.id;
    let title = req.body.title;
    let price = req.body.price;
    res.send(`Create product ${id} - ${title} - ${price}`);
});
productRouter.patch('/:id', (req, res) => {
    res.send(`Update the product ${req.params.id} with the values of ${req.body.title}, ${req.body.price}, and ${req.body.stock}`);
});
productRouter.delete('/', (req, res) => {
    let id = req.body.id;
    res.send(`Product deleted ${id}`);
});
exports.default = productRouter;
