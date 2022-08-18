const { jwtValidate } = require('../utils/auth');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const payload = jwtValidate(authorization);

  if (payload.data.role === 'admin') {
    return next();
  }

  return res.status(401).json({ message: 'You must be an admin' });
};
