const jwt = require("jsonwebtoken");

const userMiddleware = (req, res, next) => {
  const token = req.headers["x-auth-token"];
  if (!token) {
    return res.status(401).send({ errors: [{ msg: "No token. auth failed." }] });
  }

  try {
    const match = jwt.verify(token, process.env.JWT_SECRET);

    const user = jwt.decode(token);

    req.user = user.user;

    next();
  } catch (err) {
    return res.status(401).send({ errors: [{ msg: "Bad token. auth failed." }] });
  }
};

const adminMiddleware = (req, res, next) => {
  const token = req.headers["x-auth-token"];
  if (!token) {
    return res.status(401).send({ errors: [{ msg: "No token. auth failed." }] });
  }

  try {
    const match = jwt.verify(token, process.env.JWT_SECRET);

    const user = jwt.decode(token);

    req.user = user.user;

    if (user.user.isAdmin) {
      next();
    } else {
      return res.status(401).send({ errors: [{ msg: "No admin. auth failed." }] });
    }
  } catch (err) {
    return res.status(401).send({ errors: [{ msg: "Bad token. auth failed." }] });
  }
};

module.exports = { userMiddleware, adminMiddleware };
