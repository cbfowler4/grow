const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const UserModel = require('./models/user_model');

app.use(express.static('client/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({resave: true, saveUnitialized: true, secret: "bfowlz42"}));



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

app.post('/api/users', (req, res) => {
  UserModel.createUser(req.body);
});

app.get('/api/users/:_userId', (req, res) => {
  UserModel.getUser(req.params._userId).then((response)=>{
    res.send(response);
  });
});

app.post('/api/users/:_userId/habit', (req, res) => {
  UserModel.addHabit(req.body).then((response)=>{
    res.send(response);
  });
});

app.delete('/api/users/:_userId/habit/:_habitId', (req, res) => {
  UserModel.removeHabit(req.params._userId, req.params._habitId)
    .then((response) => {
      res.send(response);
    });
});

app.listen(3000);
