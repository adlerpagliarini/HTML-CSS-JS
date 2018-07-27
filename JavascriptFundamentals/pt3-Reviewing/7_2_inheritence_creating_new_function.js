const Person = function (name, age){
    this.name = name;
    this.age = age;

    this.getNameAndAge = function (){
        return `${name}-${this.age}`;
    }
}
Person.prototype.active = false;
Person.prototype.getNameAndAgeProto = function (){ return `${this.name}-${this.age}`; }

//Creating myOwn NEW
const _new = function(f){
    console.log(arguments);
    console.log(Array.prototype.slice.call(arguments, 1));

    let obj = {};
    let parms = Array.prototype.slice.call(arguments, 1);
    Object.setPrototypeOf(obj, f.prototype);
    f.apply(obj, parms);
    return obj;
}

let person = _new(Person, 'Adler', 26);
person = _new(Person, 'Adler', 27);
console.log(person);
console.log(person.getNameAndAge());
console.log(person.getNameAndAgeProto());