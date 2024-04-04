const jwt = require("jsonwebtoken");

const middlewareController = {
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1]; // sửa lại thành ký tự cách (" ")
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          res.status(403).json("token is not valid");
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json("bạn chưa xác thực");
    }
  },
  verifyTokenAndAdminAuth:(req,res,next)=>{
    middlewareController.verifyToken(req,res, ()=>{
if(req.user.id ==  req.params.id || req.user.admin){
    next();
}
else{
    res.status(403).json("you're not allowed to delete other");
}
    });
  },
};

module.exports = middlewareController;
