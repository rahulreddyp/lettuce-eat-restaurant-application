// Author : Pavan Abburi
//This component is used to verify if request is secure or not by checking if it has a token or not
const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(400).send({ success:false, message: "No token provided!" });
      }
    
      jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.status(400).send({ success: false, message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
      });
}

const checkAuth = {verifyToken};
module.exports = checkAuth;