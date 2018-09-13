'use strict';

/**
 * Module dependencies.
 */

const express       =   require('express');
const bodyParser    =   require('body-parser');
const router        =   require('./router');

/**
 * Expose
 */

 module.exports =(app)=>{

  // bodyParser should be above methodOverride
  app.use(bodyParser.urlencoded({ extended: false }));  
  app.use(bodyParser.json());

  app.use('/api/v1/',router);

  app.use(function (req, res) {
    const payload = {
      url: req.originalUrl,
      error: 'Not found'
    };
    if (req.accepts('json')) return res.status(404).json(payload);
    res.status(404).render('404', payload);
  });
 };