let promiseFirst = () => {
    return new Promise(function(resolve,reject){
        let bool = true;

        if(bool) {
            console.log(1);
            resolve('First middleware passed!');
        }
        else
            reject('Noop');

    })
};

let promiseSecond = () => {
    return new Promise(function(resolve,reject){
        let bool = true;

        setTimeout(function () {
            if(bool){
                console.log(2);
                resolve('Second middleware passed!');
            }
            else
                reject('Noop');
        },3000)



    })
};

let promiseTheard = () => {
    return new Promise(function(resolve,reject){
        let bool = true;

        setTimeout(function () {
            if(bool){
                console.log(3);
                resolve('Thesrs middleware passed!');
            }
            else
                reject('Noop');
        },2500)


    })
};

Promise.all([
    promiseFirst(),
    promiseSecond(),
    promiseTheard()
]).then(function (values) {
    console.log(values);
});
