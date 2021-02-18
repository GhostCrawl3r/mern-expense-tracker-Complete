const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({path: './Config/Config.env'});

const transactions = require('./Routes/transactions.routes');

const app = express();

app.use('/api/v1/transactions', transactions);

app.get('/', (req, res) => res.send('Hello'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.blue.bold));

