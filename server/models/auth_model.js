const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const sessionUtil = require('../util/session_util');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: String,
  password_digest: String,
  session_token: String,
  email: String,
  created: {type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);

const createUser = (user) => {
  const newUser = new User({username: user.username,
  email: user.email,
  session_token: sessionUtil.generateSessionToken(),
  password_digest: generatePasswordDigest(user.password)
  });

  console.log(newUser);
};

const generatePasswordDigest = (pswd) => {
  return bcrypt.hashSync(pswd,0);
};

module.exports = { createUser};
