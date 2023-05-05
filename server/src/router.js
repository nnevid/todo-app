const express = require('express');
const router = express.Router();
const loginRoute = require('./routes/loginRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const createTodosRoute = require('./routes/createTodosRoute');

const isLoggedIn = require('./middleware/isLoggedIn');


router.post('/login', loginRoute);
router.get('/todos', isLoggedIn, readTodosRoute);
router.post('/todos', isLoggedIn, createTodosRoute);

module.exports = router;