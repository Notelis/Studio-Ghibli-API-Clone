const jwt = require('jsonwebtoken');
const { errorResponder, errorTypes } = require('../core/errors'); // pastikan path sesuai
// Middleware to authenticate token
const config = require('../core/config');

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return next(errorResponder(errorTypes.TOKEN_VERIFY, 'Token is required'));
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret || 'default');
    req.user = decoded;
    next(); // lanjut ke controller
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return next(errorResponder(errorTypes.TOKEN_EXPIRED, 'Token has expired'));
    }
    return next(errorResponder(errorTypes.TOKEN_VERIFY, 'Invalid token'));
  }
}

module.exports = { authenticateToken };
