'use strict';

// import express from 'express';
// import { usersControler } from './Users/users.controler.js';

const express = require('express');
const usersControler = require('./Users/users.controler.js');
const expensesController = require('./Expenses/expenses.controler.js');

function createServer() {
  // Use express to create a server
  // Add a routes to the server
  // Return the server (express app)

  const app = express();

  app.use(express.json());

  // Users routes
  app.get('/users', usersControler.getAll);
  app.post('/users', usersControler.create);
  app.get('/users/:id', usersControler.getById);
  app.delete('/users/:id', usersControler.deleteById);
  app.put('/users/:id', usersControler.updateById);

  // Expenses routes
  app.get('/expenses', expensesController.getAll);
  app.post('/expenses', expensesController.create);
  app.get('/expenses/:id', expensesController.getById);
  app.delete('/expenses/:id', expensesController.deleteById);
  app.put('/expenses/:id', expensesController.updateById);

  return app;
}

module.exports = {
  createServer,
};
