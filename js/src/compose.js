/**
 * compose functions like (g, f) => x => g(f(x))
 *
 * @param  {...any} functions function array to compose
 */
const compose = (...functions) => (initialValue) => {
  return functions.reduceRight((acc, currFn) => {
    return currFn(acc);
  }, initialValue);
};

exports.compose = compose;
