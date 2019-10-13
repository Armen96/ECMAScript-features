const promiseWillFulfill = [
    new Promise((resolve, reject) => setTimeout(reject, 250, '1')),
    new Promise((resolve, reject) => setTimeout(resolve, 150, '2')),
    new Promise((resolve, reject) => setTimeout(resolve, 1, '3')),
]
Promise.race(promiseWillFulfill)
    .then(value => console.log(`The humanity survives "${value}"`))
    .catch(error => console.log(`Won't be called as 😇 will win the race`))



const promiseWillReject = [
    new Promise((resolve, reject) => setTimeout(resolve, 250, '😇')),
    new Promise((resolve, reject) => setTimeout(reject, 1, '😈')),
    new Promise((resolve, reject) => setTimeout(resolve, 250, '😇')),
]
Promise.race(promiseWillReject)
    .then(value => console.log(`This won't be called...="${value}"`))
    .catch(error => console.log(`The humanity is doomed...="${error}"`))


const promisesWithOUTReject = [
    new Promise(resolve => setTimeout(resolve, 350, 'one')),
    new Promise(resolve => setTimeout(resolve, 250, 'two')),
    new Promise(resolve => setTimeout(resolve, 150, 'three')),
]
Promise.race(promisesWithOUTReject)
    .then(value => console.log(`Promise without reject="${value}"`))


// setTimeout( () => {
//     console.log('setTimeout');
// }, 0);
//
// new Promise((resolve, reject) => {
//     setTimeout( () => {
//         resolve("Promise");
//     }, 0);
// }).then( (data) => {
//     console.log('Promise', data);
// });
