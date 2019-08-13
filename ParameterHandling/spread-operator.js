/**
 * Es6
 */
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

console.log(other);


/**
 * Es5
 */
var params = [ "hello", true, 7 ];
var other = [ 1, 2 ].concat(params); // [ 1, 2, "hello", true, 7 ]

console.log(other);
