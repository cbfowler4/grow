const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const AuthUtil = require('./models/user_model');

app.use(express.static('client/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({resave: true, saveUnitialized: true, secret: "bfowlz42"}));



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

app.post('/api/users', (req, res) => {
  console.log(req.session.cookie);
  AuthUtil.createUser(req.body);
});

app.listen(3000);
