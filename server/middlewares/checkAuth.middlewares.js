const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(400).send({ success:false, message: "No token provided!" });
      }
    
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return res.status(400).send({ success: false, message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
      });
}

const checkAuth = {verifyToken};
module.exports = checkAuth;