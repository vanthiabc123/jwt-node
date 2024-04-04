const authController = require("../controllers/authControllers");
const middlewareController = require("../controllers/middlewareController");

const router=require("express").Router();
//đăng kí
router.post("/register",authController.registerUser);
//đăng nhập
router.post("/login",authController.loginUser);
//reresh
router.post("/refresh",authController.requestRefreshToken);
//logout
router.post("/logout",middlewareController.verifyToken, authController.userLogout);
module.exports=router;

