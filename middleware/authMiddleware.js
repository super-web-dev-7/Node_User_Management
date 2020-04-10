import jwt from 'jsonwebtoken';
import config from '../config/config'

const authMiddleware = async (req, res, next) => {
  console.log('header', req.headers);
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    console.log('Token is valid', decoded);
    next();
  } catch (err) {
    //if invalid token
    res.status(400).send(err);
  }
};

export default authMiddleware;
