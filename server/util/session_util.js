const crypto = require('crypto');
const base64url = require('base64url');

const randomStringAsBase64Url = (size) => {
  return base64url(crypto.randomBytes(size));
};

const generateSessionToken = () => {
  const st = randomStringAsBase64Url(20);
  return st;
};

const login = (user) => {
  
};

module.exports = { generateSessionToken };
