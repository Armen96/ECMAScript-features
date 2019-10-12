// Es 6 Promise
const example = new Promise((resolve, reject) => {
    // Fetching some data;
    const data = "Hello from es6 Promise";

    setTimeout( () => {
        resolve(data);
    },2000);
});

example.then( data => {
    console.log(data);
});

// Es 5 callback
const fetchData = function (cb) {
    // Fetching some data;
    const data = "Hello from es5 callback";

    setTimeout(function () {
        cb(data);
    },3000)
};

fetchData( (data) => {
    console.log(data);
});
