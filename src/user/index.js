const express = require('express');
const router = express.Router();
const { addUser, deleteUser } = require('./user.controller');

router.post('', addUser);
router.delete('', deleteUser);

module.exports = router;