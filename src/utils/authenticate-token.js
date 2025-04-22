const jwt = require('jsonwebtoken');

// Middleware to authenticate token
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization; // get authorization header from request
  const token = authHeader && authHeader.split(' ')[1]; // if theres a header, split & get the token only -> Bearer <Token>

  // if there is no token
  if (!token) {
    throw errorResponder(errorTypes.TOKEN_VERIFY, 'Token is required');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'rahasia');
    req.user = decoded; // if token is valid, save user info to req
    next();
  } catch (err) {
    // if token expired
    if (err.name === 'TokenExpiredError') {
      throw errorResponder(errorTypes.TOKEN_EXPIRED, 'Token has expired');
    }
  }
}

module.exports = { authenticateToken };
