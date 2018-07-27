/* PROTO *********************************************************************************/
console.log('__PROTO__');
const Man = {
    sex: "Male"
}

const Person1 = {
    name: "P1",
    age: 99,
    __proto__: Man
}

const Person2 = {
    name: "P2",
    age: 19
}

console.log(Person1, Person2);
console.log('P1', Person1.__proto__, Person1.sex, 'P2', Person2.__proto__, Person2.sex);
console.log('Get Proto P1', Object.getPrototypeOf(Person1), 'Get Proto P2', Object.getPrototypeOf(Person2));

/****************************************************************************************/

/* Object Set PROTOTYPE *****************************************************************/
console.log('Object Set PROTOTYPE');
const PersonSet = {
    name: "P1",
    age: 99
}

Object.setPrototypeOf(PersonSet, Man);

console.log(PersonSet);
console.log('P1', PersonSet.__proto__);
console.log('Get Proto PSet', Object.getPrototypeOf(PersonSet));

/****************************************************************************************/

/* Object Create and Set PROTOTYPE ******************************************************/
console.log('Object on Create Set PROTOTYPE');

const personCreate = Object.create(Man);
personCreate.name = 'PCreated';
personCreate.age = 25;

console.log('PersonCreate', personCreate, personCreate.__proto__);
console.log('PersonCreate__proto__', personCreate.__proto__);
console.log('PersonCreate__proto__.__proto__', personCreate.__proto__.__proto__);
console.log('PersonCreate__proto__.__proto__.__proto__', personCreate.__proto__.__proto__.__proto__);


const personCreate2 = Object.create(null);
personCreate2.name = 'PCreated';
personCreate2.age = 25;
personCreate2.Man = Man;
console.log('PersonCreate2', personCreate2, personCreate2.Man.sex, personCreate2.sex, personCreate2.__proto__);


const personCreate3 = Object.create(personCreate);
personCreate3.Man = Man;
console.log('PersonCreate3', personCreate3, personCreate3.Man.sex, personCreate3.sex, personCreate3.__proto__);

/****************************************************************************************/
/* Object Shadowing ******************************************************/
console.log('Object Shadowing');

const PersonShadow = {
    name: "P1",
    age: 99
}
Object.setPrototypeOf(PersonShadow, Man);
PersonShadow.sex = 'Female';
console.log(PersonShadow);
console.log('PersonShadow - Shadow', PersonShadow.__proto__);
console.log('Get Proto PShadow', Object.getPrototypeOf(PersonShadow));
console.log('Get Keys PShadow', Object.keys(PersonShadow));
for (let property in PersonShadow)
    console.log(property, 'hasOwnProperty: ', PersonShadow.hasOwnProperty(property));

console.log('Deleting Sex Shadow - PersonShadow', PersonShadow, delete PersonShadow.sex);
for (let property in PersonShadow)
    console.log(property, 'hasOwnProperty: ', PersonShadow.hasOwnProperty(property));

console.log('Deleting Sex Proto - PersonShadow', PersonShadow, delete PersonShadow.__proto__.sex);
for (let property in PersonShadow)
    console.log(property, 'hasOwnProperty: ', PersonShadow.hasOwnProperty(property));
