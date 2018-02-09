const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const AuthUtil = require('./models/auth_model');

app.use(express.static('client/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

app.post('/api/users', (req, res) => {
  AuthUtil.createUser(req.body);
});

app.listen(3000);
