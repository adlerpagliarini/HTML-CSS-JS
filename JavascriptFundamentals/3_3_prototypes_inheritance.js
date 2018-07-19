function Bear(type){
    this.type = type;

}
//will assign to the new objects just to the Bear class
Bear.growl = function(){
    console.log('grrr');
}
//will not been assign to the Bear Class but to the instances of Bear
Bear.prototype.growlp = function(){
    console.log(`grrrp Im ${this.type}`);
}
//Instantiate Object
const grizzly = new Bear('AdlerOne');
const polar = new Bear('AdlerTwo');
console.log(grizzly, polar, Bear.growl, Bear.growlp);
grizzly.growlp();


function Grizzly(type){
    Bear.call(this, type)
}
//Inheritance the Bear prototype
Grizzly.prototype = Object.create(Bear.prototype);
const grizzlyG = new Grizzly('Grizzly');
console.log(grizzlyG.growlp());