/**
 * @fileoverview This file implements mathematical operations over GF(2^8).
 * @author Steven Dee (mrdomino@gmail.com)
 */

goog.provide('gf28');

goog.require('goog.array');
goog.require('goog.asserts');


/**
 * @typedef {number}
 */
gf28.elem;

/**
 * @typedef {function(gf28.elem): gf28.elem}
 */
gf28.unaryFunc;

/**
 * @typedef {function(gf28.elem, gf28.elem): gf28.elem}
 */
gf28.binaryFunc;

/**
 * Additive identity.
 * @const
 * @type {gf28.elem}
 */
gf28.ZERO = 0;

/**
 * Multiplicative identity.
 * @const
 * @type {gf28.elem}
 */
gf28.ONE = 1;

/**
 * Number of distinct elements in the field.
 * @const
 * @type {number}
 */
gf28.SIZE = 1 << 8;

/**
 * Primitive reducing polynomial.
 * @const
 * @type {number}
 * @private
 */
gf28.PRIM_POLY = 0435;

/**
 * With PRIM_POLY, generates the field.
 * @const
 * @type {gf28.elem}
 */
gf28.GEN = 0x02;  // Note that since this is 2, we can shift rather than
                  // multiply to generate log tables.

/**
 * Bitmask for field elements.
 * @const
 * @type {number}
 */
gf28.MASK = (1 << 8) - 1;

/**
 * Determines whether a value is a valid element in GF(2^8).
 * @param {number} x Element to check
 * @return {boolean} true iff x \in GF(2^8)
 */
gf28.isElem = function(x) {
  return (x & gf28.MASK) == x && typeof x == 'number';
}

/**
 * Adds two numbers in GF(2^8).
 * @type {gf28.binaryFunc}
 */
gf28.add = function(x, y) {
  gf28.checkArgs_(arguments);
  return x ^ y;
}

/**
 * Subtracts two numbers in GF(2^8) (equivalent to addition).
 * @type {gf28.binaryFunc}
 */
gf28.sub = gf28.add;

/**
 * Multiplies two numbers in GF(2^8).
 * @type {gf28.binaryFunc}
 */
gf28.mul = function(x, y) {
  gf28.checkArgs_(arguments);
  gf28.init_();
  if (x == 0 || y == 0) return 0;
  var idx = gf28.log_[x] + gf28.log_[y];
  if (idx >= gf28.MASK) idx -= gf28.MASK;
  return gf28.exp_[idx];
}

/**
 * Divides two numbers in GF(2^8) (equivalent to mul(x, inv(y))).
 * @type {gf28.binaryFunc}
 */
gf28.div = function(x, y) {
  gf28.checkArgs_(arguments);
  goog.asserts.assert(y > 0);
  gf28.init_();
  if (x == 0) {
    return 0;
  }
  var idx = gf28.log_[x] - gf28.log_[y];
  if (idx < 0) {
    idx += gf28.MASK;
  }
  return gf28.exp_[idx];
}

/**
 * Computes multiplicative inverses in GF(2^8).
 * @type {gf28.unaryFunc}
 */
gf28.inv = function(x) {
  gf28.checkArgs_(arguments);
  goog.asserts.assert(x > 0);
  gf28.init_();
  if (x == 0) {
    return 0;
  }
  return gf28.exp_[(gf28.MASK - gf28.log_[x]) % gf28.MASK];
}

/**
 * Raises GF(2^8) elements to integer powers.
 * @param {gf28.elem} x Base element.
 * @param {number} n Integral power.
 * @return {gf28.elem} x ** n over GF(2^8).
 */
gf28.pow = function(x, n) {
  goog.asserts.assert(gf28.isElem(x));

  if (n == 0)
    return 1;
  if (n < 0)
    return gf28.pow(gf28.inv(x), -n);

  var x1 = gf28.pow(x, n >> 1);
  if (x1 == 1)
    return x;

  if (n & 0x01)
    return gf28.mul(x, gf28.mul(x1, x1));
  else
    return gf28.mul(x1, x1);
}

/**
 * Checks that the passed array contains only elements in GF(2^8).
 * @param {goog.array.ArrayLike} args Argument array to validate.
 * @private
 */
gf28.checkArgs_ = function(args) {
  var l = args.length;
  for (var i = 0; i < l; ++i) {
    goog.asserts.assert(gf28.isElem(args[i]));
  }
}

/**
 * log table for use in arithmetic operations (generated by init_).
 * @type {Uint8Array}
 * @private
 */
gf28.log_ = null;

/**
 * inverse log table for use in arithmetic operations (generated by init_).
 * @type {Uint8Array}
 * @private
 */
gf28.exp_ = null;

/**
 * Initializes log tables.
 * @private
 */
gf28.init_ = function() {
  if (!gf28.exp_) {
    gf28.log_ = new Uint8Array(gf28.SIZE);
    gf28.exp_ = new Uint8Array(gf28.SIZE);

    for (var i = 0; i < gf28.SIZE; ++i) {
      gf28.log_[i] = gf28.MASK;
      gf28.exp_[i] = 0;
    }

    var accum = gf28.ONE;
    for (var i = 0; i < gf28.MASK; ++i) {
      gf28.log_[accum] = i;
      gf28.exp_[i] = accum;
      accum = accum << 1;
      if (accum & gf28.SIZE) {
        accum = (accum ^ gf28.PRIM_POLY) & gf28.MASK;
      }
    }
  }
}


goog.exportSymbol('gf28.add', gf28.add);
goog.exportSymbol('gf28.sub', gf28.sub);
goog.exportSymbol('gf28.mul', gf28.mul);
goog.exportSymbol('gf28.div', gf28.div);
goog.exportSymbol('gf28.inv', gf28.inv);
goog.exportSymbol('gf28.pow', gf28.pow);

goog.exportSymbol('gf28.isElem', gf28.isElem);

goog.exportSymbol('gf28.ZERO', gf28.ZERO);
goog.exportSymbol('gf28.ONE', gf28.ONE);
goog.exportSymbol('gf28.SIZE', gf28.SIZE);
goog.exportSymbol('gf28.MASK', gf28.MASK);
goog.exportSymbol('gf28.GEN', gf28.GEN);
goog.exportSymbol('gf28.PRIM_POLY', gf28.PRIM_POLY);
