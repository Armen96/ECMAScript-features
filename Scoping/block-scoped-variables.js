let callbacks = [];
for (let i = 0; i <= 5; i++) {
    callbacks[i] = function () { return i * 2 }
}


console.log(callbacks[0]());
console.log(callbacks[1]());
console.log(callbacks[2]());


var callbacksFunc = [];
for (var i = 0; i <= 5; i++) {

    (function(i){
        callbacksFunc[i] = function () { return i * 2 }
    })(i);

}

console.log(callbacksFunc[0]());
console.log(callbacksFunc[1]());
console.log(callbacksFunc[2]());
