module.exports = auth;

function auth(req, res, next) {
  // Custom code
  const loggedIn = true;
  if (loggedIn) next();
}
