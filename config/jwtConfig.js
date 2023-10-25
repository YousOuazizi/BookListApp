module.exports = {
  secret: process.env.JWT_SECRET,
  expiresIn: "1h", // 1 heure, mais vous pouvez ajuster cela selon vos besoins
};
