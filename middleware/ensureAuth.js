// /middleware/ensureAuth.js
module.exports = function ensureAuth(req, res, next) {
  if (req.session?.usuario) return next();
  return res.redirect('/login');
};
