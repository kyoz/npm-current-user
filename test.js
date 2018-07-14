import test from 'ava';

const npmCurrentUser = require('.');

test('return valid data', async t => {
  const info = await npmCurrentUser();
  t.true(getObjectLength(info) === 5 || getObjectLength(info) === 0);
});

function getObjectLength(obj) {
  return obj ? Object.keys(obj).length : 0;
}
