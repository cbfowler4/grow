const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const sessionUtil = require('../util/session_util');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: {type: String, required: true},
  password_digest: {type: String, required: true},
  session_token: {type: String, required: true},
  email: {type: String, required: true},
  created: {type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);

const createUser = (user) => {
  const newUser = new User({username: user.username,
  email: user.email,
  session_token: sessionUtil.generateSessionToken(),
  password_digest: generatePasswordDigest(user.password)
  });

  newUser.save();
};

const generatePasswordDigest = (pswd) => {
  return bcrypt.hashSync(pswd,0);
};

module.exports = { createUser};
