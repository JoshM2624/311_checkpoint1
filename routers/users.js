const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');

//get all the users in the file
router.get('/users', usersController.getAll);

// get user by Id from list
router.get('/users/:id', UsersController.getId);

// create user into list
router.post('/users', usersController.create);

//update user by id
router.put('/users/:id', usersController.updateId);

// delete a user from the list
router.delete('/users/:id', usersController.delete);

module.exports = router;
