const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authRepository = require('./auth-repository');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function login(email, password) {
  const user = await authRepository.getUserByEmail(email);
  
  // if user not found
  if (!user) {
    throw errorResponder(errorTypes.INVALID_CREDENTIALS, 'Email not found');
  }

  // if password doesnt match
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw errorResponder(errorTypes.INVALID_CREDENTIALS, 'Incorrect password');
  }

  // create jwt
  const token = jwt.sign(
    { 
      id: user._id, //payload
      email: user.email, //payload
    },
    process.env.JWT_SECRET || 'rahasia', 
    { expiresIn: '1h' } // expires in 1 hour
  );

  // return to controller
  return token;
}

module.exports = {
  login,
};
