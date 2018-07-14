# npm-current-user 

> Get current npm user info

[![Build Status](https://travis-ci.org/banminkyoz/npm-current-user.svg?branch=master)](https://travis-ci.org/banminkyoz/npm-current-user) [![NPM version](https://badge.fury.io/js/npm-current-user.svg)](http://badge.fury.io/js/npm-current-user) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

## Install

```
$ npm install npm-current-user
```

## Usage

```js
const npmCurrentUser = require('npm-current-user');

npmCurrentUser().then(info=> {
  console.log(info);
});

/* Results:

{ 
  name: 'banminkyoz',
  avatar: 'https://gravatar.com/avatar/64b58245e1cfd5fabd85297a1d5e3ab8?size=496',
  email: 'banminkyoz@gmail.com',
  github: 'banminkyoz',
  twitter: null 
  }

*/
```

Result will be `null` if you aren't logging to npm

## CLI

```sh
$ npm-current-user

name:    banminkyoz,
avatar:  https://gravatar.com/avatar/64b58245e1cfd5fabd85297a1d5e3ab8?size=496,
email:   banminkyoz@gmail.com,
github:  banminkyoz,
twitter: null
```

## Related

* [npm-whoami](https://github.com/jamestalmage/npm-whoami) - Finds the npm username of the logged in npm user.
* [npm-user](https://github.com/sindresorhus/npm-user) - Get user info of an npm user by username

## License

MIT © [Kyoz](mailto:banminkyoz@gmail.com)