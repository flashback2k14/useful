const test = require('tape');
const { pipe } = require('../src/pipe');
const { user, getUserName, replaceWhitespace, toUpperCase } = require('./util');

test('test piping functions', (t) => {
  const expected = 'JOHN-DOE';
  const actual = pipe(getUserName, replaceWhitespace, toUpperCase)(user);

  t.equal(actual, expected);
  t.end();
});
