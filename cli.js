#!/usr/bin/env node

'use strict';

const npmCurrentUserInfo = require('.');

console.log('\nGetting npm user info...');

npmCurrentUserInfo().then(userInfo => {
  if (!userInfo) {
    console.log('\nNot found user ! You must login to npm.');
  }

  console.log(`
name:    ${userInfo.name}
avatar:  ${userInfo.avatar}
email:   ${userInfo.email}
github:  ${userInfo.github}
twitter: ${userInfo.twitter}
  `);
});
