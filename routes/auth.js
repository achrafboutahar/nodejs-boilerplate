const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.redirect("/auth/login"));

router.get("/login", (req, res) => res.send("<h1>Login page form</h1>"));

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const token = "GENERATED TOKEN (e.g : JWT)";
    if (token) {
      const options = {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
        secure: true,
      };
      res.cookie("token", token, options);
      return res.end();
    }
  }
  res.status(401).json({ message: "Unauthorized!" });
  return res.end();
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
  return res.end();
});

module.exports = router;
