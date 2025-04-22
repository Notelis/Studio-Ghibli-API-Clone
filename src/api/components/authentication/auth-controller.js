const authService = require('./auth-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'There is no email or password');
    }

    const token = await authService.login(email, password);
    if (!token) {
      throw errorResponder(errorTypes.INVALID_CREDENTIALS, 'Email or password is not valid');
    }

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  login,
};
