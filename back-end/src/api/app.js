const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.get('/', (_req, res) => res.status(200).send('Ok'));

module.exports = app;
