/**
 * Performs left-to-right function composition.
 *
 * @param  {...any} functions function array to pipe
 * @returns function
 */
const pipe = (...functions) => (initialValue) => {
  return functions.reduce((acc, currFn) => {
    return currFn(acc);
  }, initialValue);
};

exports.pipe = pipe;
