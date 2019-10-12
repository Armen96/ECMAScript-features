let obj = { a: 1 };
Object.defineProperty(obj, "b", { value: 2 });
obj[Symbol("c")] = 3;
Reflect.ownKeys(obj); // [ "a", "b", Symbol(c) ]


var obj2 = { a: 1 };
Object.defineProperty(obj2, "b", { value: 2 });
// no equivalent in ES5
Object.getOwnPropertyNames(obj2); // [ "a", "b" ]



let anotherObject = {
    a: 5,
    b: 'Something',
    c: {
        d: 'oops'
    }
};

console.log(Reflect.ownKeys(anotherObject));
