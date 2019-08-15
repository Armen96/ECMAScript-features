/**
 * Es6
 */
class Person {
    constructor(id,x){
        this.id = id;
        this.xx = x;
    }

    sum(){
        return this.xx + this.id;
    }
}

let p1 = new Person(1,5);
console.log(p1.sum());


/**
 * Es 5
 * @param id
 * @param x
 */
let person = function (id,x) {
    this.id = id;
    this.xx = x;
};

person.prototype.sum = function () {
    return this.xx + this.id;
};

let p2 = new person(5,7);
console.log(p2.sum());
