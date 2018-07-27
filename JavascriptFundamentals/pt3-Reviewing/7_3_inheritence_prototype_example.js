function User(name, email, phone, street, number){
    this.name = name;

    ContactInfo.call(this, email, phone, street, number);

    this.getUserInfo = function (){
        return this.valueOf();
    }

    this.getAddress = function (){
        console.log('User Inner ->');
        return User.prototype.getAddress(this);
    }
}
User.prototype.getUserInfo = function (){
    return this.valueOf();
}
User.prototype.getAddress = function ($this){
    console.log(' <- User Proto ->');
    return ContactInfo.prototype.getAddress($this);
}

function ContactInfo (email, phone, street, number){
    this.email = email;
    this.phone = phone;
    Address.call(this, street, number);

    this.getContactInfo = function() {
        return `Inner - ${this.email} - ${this.phone}`;
    }

    this.getAddress = function() {
        console.log(' <- ContactInfo Inner ->');
        return ContactInfo.prototype.getAddress(this);
    }
}
ContactInfo.prototype.getAddress = function($this) {
    console.log(' <- ContactInfo Proto ->');
    return Address.prototype.getAddress($this);
}

function Address (street, number){
    this.street = street;
    this.number = number;

    this.getAddress = function() {
        console.log(' <- Address Inner ->');
        return Address.prototype.getAddress(this);
    }
}
Address.prototype.getAddress = function($this) {
    console.log(' <- Address Proto ->');
    return `     Address -> ${$this.street} - ${$this.number}`;
}

console.log('');
console.log('User', new User('name', 'email', 'phone', 'street', 'number').getAddress());
console.log('ContactInfo', new ContactInfo('email', 'phone', 'street', 'number').getAddress());
console.log('Address', new Address('street', 'number').getAddress());
console.log('');

//Default Prototype - User.prototype = Object.create(User.prototype);
const newUser = new User('User', 'User@test.com', '99-99', 'Street-User', '12345');
console.log('User', newUser, newUser.__proto__);
console.log('User Prototype: ', newUser.getUserInfo());
console.log('');
console.log('User Address: ', newUser.getAddress());
console.log('');
console.log('_proto__', newUser.__proto__);
console.log('__proto__.__proto__', newUser.__proto__.__proto__);
console.log('__proto__.__proto__.__proto__', newUser.__proto__.__proto__.__proto__);
console.log('');
console.log('');

User.prototype = Object.create(ContactInfo.prototype);
const newUserContactInfo = new User('ContactInfo', 'ContactInfo@test.com', '99-99', 'Street-ContactInfo', '12345');
console.log('CHANGING USER PROTOTYPE ContactInfo: ', newUserContactInfo, newUserContactInfo.__proto__);
console.log('newUserContactInfo', newUserContactInfo, newUserContactInfo.__proto__);
console.log('newUserContactInfo Prototype: ', newUserContactInfo.getUserInfo());
console.log('');
console.log('newUserContactInfo Address: ', newUserContactInfo.getAddress());
console.log('');
console.log('__proto__', newUserContactInfo.__proto__);
console.log('__proto__.__proto__', newUserContactInfo.__proto__.__proto__);
console.log('__proto__.__proto__.__proto__', newUserContactInfo.__proto__.__proto__.__proto__);
console.log('__proto__.__proto__.__proto__.__proto__', newUserContactInfo.__proto__.__proto__.__proto__.__proto__);
console.log('');
console.log('');

User.prototype = Object.create(Address.prototype);
const newUserAddress = new User('Address', 'Address@test.com', '99-99', 'Street-Address', '12345');
console.log('CHANGING USER PROTOTYPE Address: ', Address, newUserAddress.__proto__);
console.log('newUserAddress', newUserAddress, newUserAddress.__proto__);
console.log('newUserAddress Prototype: ', newUserAddress.getUserInfo());
console.log('');
console.log('newUserAddress Address: ', newUserAddress.getAddress());
console.log('');
console.log('__proto__', newUserAddress.__proto__);
console.log('__proto__.__proto__', newUserAddress.__proto__.__proto__);
console.log('__proto__.__proto__.__proto__', newUserAddress.__proto__.__proto__.__proto__);
console.log('__proto__.__proto__.__proto__.__proto__', newUserAddress.__proto__.__proto__.__proto__.__proto__);