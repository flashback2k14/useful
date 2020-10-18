/**
 * Performs right-to-left function composition.
 *
 * @param  {...any} functions function array to compose
 * @returns function
 */
const compose = (...functions) => (initialValue) => {
  return functions.reduceRight((acc, currFn) => {
    return currFn(acc);
  }, initialValue);
};

exports.compose = compose;
