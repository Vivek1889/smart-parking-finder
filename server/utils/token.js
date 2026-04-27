const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      role: user.role,
    },
    "secretKey",
    { expiresIn: "1d" },
  );
};

module.exports = { generateToken };
