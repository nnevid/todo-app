const express = require('express');
const router = express.Router();
const loginRoute = require('./routes/loginRoute');
const todosRoute = require('./routes/todosRoute');
const isLoggedIn = require('./middleware/isLoggedIn');


router.post('/login', loginRoute);
router.get('/todos', isLoggedIn, todosRoute);

module.exports = router;