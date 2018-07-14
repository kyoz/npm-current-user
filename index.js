'use strict';

const npmWhoami = require('npm-whoami');
const npmUserInfo = require('npm-user');

module.exports = () => {
  return new Promise(resolve => {
    npmWhoami((err, userName) => {
      if (err) {
        return resolve(null);
      }
      npmUserInfo(userName).then(userInfo => {
        resolve(userInfo);
      }).catch(() => {
        resolve(null);
      });
    });
  });
};
