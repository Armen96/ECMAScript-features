const obj = {
   foo: 'Welcome foo'
};

const proxyObj = new Proxy(obj, {
    get(receiver, p) {
        return (p in receiver) ? receiver[p] : 'Please set a right key property!';
    }
});

console.log(obj.foo); // Welcome foo

console.log(obj.asd); // undefined

console.log(proxyObj.asd); // Please set a right key property!
