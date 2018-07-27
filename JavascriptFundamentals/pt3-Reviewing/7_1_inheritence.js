const Person = function (name, age){
    this.name = name;
    this.age = age;

    this.getNameAndAge = function (){
        return `${name}-${this.age}`;
    }
}
Person.prototype.active = false;
Person.prototype.getNameAndAgeProto = function (){ return `${this.name}-${this.age}`; }

let p1 = new Person('abc1', 123);
let p1 = new Person('abc1', 123);

let p2 = {};
Person.call(p2, 'abc2', 1234);
p2.__proto__ = Person.prototype;

let p3 = {};
Person.apply(p3, ['abc3', 12345]);
Object.setPrototypeOf(p3, Person.prototype);

console.log(p1, p2, p3);
console.log(p1, Object.getPrototypeOf(p1));
console.log(p2, Object.getPrototypeOf(p2));
console.log(p3, Object.getPrototypeOf(p3));
//Prototypes
console.log(p1.getNameAndAge(), p1.getNameAndAgeProto());
console.log(p2.getNameAndAge(), p2.getNameAndAgeProto());
console.log(p3.getNameAndAge(), p3.getNameAndAgeProto());


//
Person.prototype.getNameAndAgeProto = function (){
    Person.prototype.active = true;
    return `Changing prototype for all ${this.name}-${this.age}`;
}
console.log(p1, p1.getNameAndAge(), p1.getNameAndAgeProto());
console.log(p2, p2.getNameAndAge(), p2.getNameAndAgeProto());
console.log(p3, p3.getNameAndAge(), p3.getNameAndAgeProto());

// object does not have prototype, functions have prototype
const testO = { name: 'a' };
const testF = function () {
    return '';
} 

console.log('');
console.log('TEST');
console.log(testO.prototype, testO.__proto__); //__proto__ object
console.log(testF.prototype, testF.__proto__); //__proto__ native code
console.log(Person.prototype, Person.__proto__);//__proto__ native code

console.log('');
console.log('TEST');
console.log(testO, testO.__proto__.__proto__); // 2
console.log(testF, testF.__proto__.__proto__.__proto__); // 3
console.log(Person, Person.__proto__.__proto__.__proto__); // 3
console.log(new Person(), new Person().__proto__.__proto__.__proto__); // 3
