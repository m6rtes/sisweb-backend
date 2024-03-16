import express, {Express, Request, Response} from 'express';
const morgan = require('morgan');
import apiRouter from './src/routes';
import exp from 'constants';
// const express = require('express');
// Lo cambie pa que jalara con ts

const app: Express = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json()); //orden importa
app.use(apiRouter);

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
});

// para correr el codigo puedes hacer node index.js
// npm run __