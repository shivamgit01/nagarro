const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/auth");
  }
  next();
};

module.exports = {
  isLoggedIn,
};
