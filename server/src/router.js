const express = require('express');
const router = express.Router();
const loginRoute = require('./routes/loginRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const createTodoRoute = require('./routes/createTodoRoute');
const updateTodoRoute = require('./routes/updateTodoRoute');

const isLoggedIn = require('./middleware/isLoggedIn');
router.post('/login', loginRoute);

//CRUD ROUTES
router.get('/todos', isLoggedIn, readTodosRoute);
router.post('/todos', isLoggedIn, createTodoRoute);
router.put('/todos', isLoggedIn, updateTodoRoute);

module.exports = router;