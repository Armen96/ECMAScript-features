let user = {
    'name': 'ARMEN',
    [Symbol.for('password')]: 'qw7d5f1'
};

let password = Symbol.for('password');

// console.log(user[password]);



const iterable1 = new Object();

iterable1[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

console.log([...iterable1]);
// expected output: Array [1, 2, 3]
