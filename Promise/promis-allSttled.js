/**
 * 
 * Promise.allSettled resolves regardless of rejected promise(s) within the iterable object.
 */

const promisesWithRejection = [
    new Promise( (res, rej) => { res("Resolved")} ),
    new Promise((resolve, reject) => setTimeout(reject, 150, '😇')),
    new Promise((resolve, reject) => setTimeout(resolve, 1, '😇')),
];


Promise.allSettled(promisesWithoutRejection)
    .then(apples => {
        const badApples = apples.filter(apple => apple.status === 'rejected').map(_ => _.reason);
        const goodApples = apples.filter(apple => apple.status === 'fulfilled').map(_ => _.value);

        console.log(`Let's throw out`, badApples, `and sell the rest`, goodApples)
    });
