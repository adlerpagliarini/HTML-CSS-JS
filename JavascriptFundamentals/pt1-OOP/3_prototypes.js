//Constructor
function Book(title, author, year){
    console.log('Book Initialized');
    this.title = title;
    this.author = author;
    this.year = year;
}

//Prototype
Book.prototype.getSummary = function (){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.getAge = function (){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years}`;
};
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

Book.prototype.arrow = function(newYear){
    let v = (n) => {
        this.year = n;
    }
    v(newYear);
}

const book1 = new Book('title1', 'author', 2000);
const book2 = new Book('title2', 'author', 2016);

console.log(book1.title);
console.log(book1.getAge());

console.log(book2.title + ' ' + book2.getSummary());
book2.revise(2018);
console.log(book2.revised);

book2.arrow(2019);
console.log(book2.getSummary());

console.log(book1);
console.log(book1.__proto__.__proto__);
