const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const sessionUtil = require('../util/session_util');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/grow').then(
  () => {console.log('connected');},
  (err) => {console.log(err);}
);

const userSchema = new Schema ({
  username: {type: String, required: true, unique: true},
  password_digest: {type: String, required: true},
  session_token: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  created: {type: Date, default: Date.now},
  habits: {type: Array, default: []}
});

const User = mongoose.model('User', userSchema);

const createUser = (user) => {
  const newUser = new User({username: user.username,
  email: user.email,
  session_token: sessionUtil.generateSessionToken(),
  password_digest: generatePasswordDigest(user.password)
  });

  newUser.save();
  sessionUtil.login(newUser);
};

const generatePasswordDigest = (pswd) => {
  return bcrypt.hashSync(pswd,0);
};

const isUser = () => {
  // User.findOne({ email: req.session.user.email }, function(err, user) {
  //   if (user) {
  //     req.user = user;
  //     delete req.user.password; // delete the password from the session
  //     req.session.user = user;  //refresh the session value
  //     res.locals.user = user;
};

const getUser = (userId) => {
  return User.findById(userId, "username habits", function(err, res) {
    return res;
  });
};

const addHabit = (habit) => {
  // find user, append to array of habits, return new habit
  // return User.findById(habit.userId)
};

const removeHabit = (userId, habitId) => {
  // find user, remove habit with corresponding id, return success
};

module.exports = { createUser, isUser, getUser, addHabit, removeHabit};
