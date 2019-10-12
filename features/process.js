console.log(process.argv);



let x = 0;

while (true) {
    x++;

    process.stdout.write(`${x}`);


    if(x > 100) {
        process.exit();
    }
}
