import baseForOwnRight from './.internal/baseForOwnRight.js';
import createBaseEach from './.internal/createBaseEach.js';

/**
 * The base implementation of `forEachRight`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
const baseEachRight = createBaseEach(baseForOwnRight, true);

export default baseEachRight;
