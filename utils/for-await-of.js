function asyncEvent() {
    return new Promise((resolve => {
        setTimeout(function () {
            resolve('setTimeout')
        }, 2000);
    }))
}

const asyncArray = [
    Promise.resolve([1, 2, 3]),
    Promise.resolve(true),
    asyncEvent()
];

(async function() {
    for await (let item of asyncArray) {
        console.log(item);
    }

    console.log('After async loop');
})();
