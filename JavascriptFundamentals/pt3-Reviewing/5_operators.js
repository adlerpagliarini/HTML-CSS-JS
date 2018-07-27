
// 10 == '10' IF Number == String
// String will be converted to 10 == ToNumber('10')

// 10 == x IF Number == Object
// first will try get valueOf after toString, because going to use 10 == ToPrimitive(x) and will try to use both methods
let x = {
    valueOf: function(){
        return 10;
    }
}
let y = {    
    toString: function(){
        return 10;
    }
}
//true
console.log(10 == y);
//true
console.log(10 == y);

//false
let xx = {
    valueOf: function(){
        return 10;
    },
    toString: function(){
        return 10;
    }
}
let yy = {    
    valueOf: function(){
        return 10;
    },
    toString: function(){
        return 10;
    }
}
console.log(xx == yy);

//to compare Objects is needed to create your own
/*
1 || 2 return 1
1 | 2  return 3  0001 - 1 0010 - 2 = 0011 - 3 will compare bite a bite
1 && 2 return 2
1 & 2  return 0  0001 - 1 0010 - 2 = 0000 - 0
*/

/* instanceof */
const Person = function (name, age) {
    this.name = name;
    this.age = age;
}

let p = new Person('p1', 99);
console.log('instanceOF? ', p instanceof Person);
console.log('in? ', 'name' in p);
console.log('delete name', delete p.name, 'name' in p);
