"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan = require('morgan');
const routes_1 = __importDefault(require("./src/routes"));
// const express = require('express');
// Lo cambie pa que jalara con ts
const app = (0, express_1.default)();
const port = 3000;
app.use(morgan('dev'));
app.use(express_1.default.json()); //orden importa
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
// para correr el codigo puedes hacer node index.js
// npm run __
