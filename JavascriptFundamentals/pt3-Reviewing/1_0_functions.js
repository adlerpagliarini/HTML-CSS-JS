/******************************************/
/*FUNCTION DECLARATION VS FUNCTION EXPRESSION*/
/******************************************/
function sumDeclaration(a, b){
    return a+b;
}

var sumExpression = function(a, b){
    return a+b;
}

console.log(sumDeclaration, sumExpression);

/******************************************/
/*FUNCTION as a parm*/
/******************************************/
const product1 = {name:'Shoes', price: 150};
const product2 = {name:'Shoes', price: 250};

const shipping = (price) => { return price*0.1 };

const calculatePrice = (product, shippingF) => {
    return product.price + shippingF(product.price);
}

console.log(calculatePrice(product1, shipping));
console.log(calculatePrice(product2, shipping));

/******************************************/
/*Returning Function*/
/******************************************/
const returnF = () => {
    return () => {
        return "I'm returning it"
    }
}
console.log(returnF, returnF(),returnF()());
/******************************************/
/*Function by Object*/
/******************************************/
const getAgeOutThis = function(){ return this.age };
const getAgeOutThisWithMoreParms = function(parm = 0){ console.log(arguments); return this.age + parm; };
var person = {
    nome: "Adler",
    age: 99,
    getAge: function () {
        return this.age;
    },
    getAgeOutThis: getAgeOutThis
}

console.log(person, person.getAge(), person.getAgeOutThis());
    /******************************************/
    /*Function CALL VS APPLY*/
    // They are used to assign in what scope a function should be executed
    //call(scope, parm1, parm2);
    //apply(scope, parms);
    /******************************************/
    console.log('CALL', getAgeOutThis.call(person));
    console.log('APPLY', getAgeOutThis.apply(person));
    console.log('CALL 10', getAgeOutThisWithMoreParms.call(person, 10));
    console.log('CALL 20', getAgeOutThisWithMoreParms.call(person, 20, 30));
    console.log('APPLY [10,20]', getAgeOutThisWithMoreParms.apply(person, [20,30]));

/******************************************/
/*Function NEW */
/*Factory Functions VS Constructors Functions
/******************************************/
const createFactoryPerson = (name, age) => {
    return {
        name: name,
        age: age
    };
}
console.log('createFactoryPerson', createFactoryPerson, createFactoryPerson("Pagliarini", 10));
console.log('createFactoryPerson', createFactoryPerson, createFactoryPerson("Nascimento", 20));

const CreateConstructorPerson = function(name, age) {
    this.name = name;
    this.age = age;
    //this refers to the object that has being created
}
console.log('CreateConstructorPerson', CreateConstructorPerson, new CreateConstructorPerson("Pagliarini", 10));
console.log('CreateConstructorPerson', CreateConstructorPerson, new CreateConstructorPerson("Nascimento", 20));
/**How NEW looks like**/
let objPerson = {};
CreateConstructorPerson.call(objPerson, 'Person Name', 26);
console.log(objPerson);







