/**
 * Es6
 *
 * @param x
 * @param y
 * @param z
 * @returns {*}
 */
function foo (x, y = 7, z = 42) {
    return x + y + z
}

console.log(foo(4))


/**
 * Es5
 *
 * @param x
 * @param y
 * @param z
 * @returns {*}
 */
function bar (x, y, z) {
    if (y === undefined)
        y = 7
    if (z === undefined)
        z = 42
    return x + y + z
}

console.log(bar(4, 5))
