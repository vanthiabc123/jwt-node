const express = require('express');
const middlewareController = require('../controllers/middlewareController');
const userController = require('../controllers/userController');
const router = express.Router();
//get user
router.get('/',middlewareController.verifyToken,userController.getAllUsers);
//delete user:
router.delete("/:id",middlewareController.verifyTokenAndAdminAuth, userController.deleteUser);
module.exports = router;