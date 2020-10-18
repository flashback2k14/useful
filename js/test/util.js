const user = { name: 'john doe', password: 1234 };
const getUserName = (user) => user.name;
const replaceWhitespace = (string) => string.replace(' ', '-');
const toUpperCase = (string) => string.toUpperCase();

module.exports = {
  user,
  getUserName,
  replaceWhitespace,
  toUpperCase,
};
