/**
 * globalThis
 * @returns {*}
 */
const getGlobalThis = require('../utils/global-this').getGlobalThis();

/**
 *
 * EcmaScript 6
 * @type {number}
 */
// const PI = 3.141593;

/**
 * EcmaScript 5
 */
Object.defineProperty(getGlobalThis,'PI',{
    value: 3.14,
    writable: false,
    enumerable: true,
    configurable: false
});

console.log('PI ',PI);
