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

//Constructor with Inheritence
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}

//Inheritence methods
Magazine.prototype = Object.create(Book.prototype);

// Change constructor instead of it stay with book
Magazine.prototype.constructor = Magazine;

const magazine1 = new Magazine('title1', 'author', 2000, 07);
console.log(magazine1);
console.log(magazine1.title);
console.log(magazine1.getSummary());
