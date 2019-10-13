/**
 *
 * Promise.all rejects as soon as a promise within the iterable object rejected.
 */

const promisesWithoutReject = [
    Promise.resolve('🍎 #1'),
    '🍎 #2',
    new Promise((resolve, reject) => setTimeout(resolve, 1000, '🍎 #3'))
];

Promise.all(promisesWithoutReject)
    .then(apples => console.log(`We can sell all these good apples`, apples))


const promisesWithOneReject = [
    Promise.resolve('🍎 #1'),
    '🍎 #2',
    new Promise((_, reject) => setTimeout(reject, 1000, 'Bad 🍏'))
];

Promise.all(promisesWithOneReject)
    .then(console.log)
    .catch(badApple =>
        console.error(`Threw out all apples because of this`, badApple))
