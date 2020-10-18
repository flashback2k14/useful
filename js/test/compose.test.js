const test = require('tape');
const { compose } = require('../src/compose');
const { user, getUserName, replaceWhitespace, toUpperCase } = require('./util');

test('test composing functions', (t) => {
  const expected = 'JOHN-DOE';
  const actual = compose(toUpperCase, replaceWhitespace, getUserName)(user);

  t.equal(actual, expected);
  t.end();
});
