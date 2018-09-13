'use strict';

/**
 * Module dependencies
 */

require ('dotenv').config();

const express   =   require('express');
const dbClient  =   require('./app/config/pg');


const port      =   process.env.PORT || 3001;
const app       =   express();

/**
 * Expose
 */

module.exports  =   app;

/**
 * Bootstrap routes and middleware 
 */
require('./app/config/express')(app);
app.listen(port, () => console.log('Example app listening on port '+port+'!'));


//var client=dbClient.clinet;


