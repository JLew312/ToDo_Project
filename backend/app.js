const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();

app.use(routes);

// ERROR-HANDLING MIDDLEWARE ---> ADD LATER!!!

module.exports = app;
