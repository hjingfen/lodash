import freeGlobal from './.internal/freeGlobal.js';

/** Detect free variable `self`. */
const freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
const root = freeGlobal || freeSelf || Function('return this')();

export default root;
