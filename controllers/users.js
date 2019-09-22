const users = require('../data/index');
const newUsers = require('../data/sampleUser');

//get all the users in the file
const getAll = ('/users',
(req, res) => {
	res.json(users);
});

// get user by Id from list

// create user into list

//update user by id

// delete a user from the list
