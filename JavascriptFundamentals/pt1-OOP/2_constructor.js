//Constructor
function Book(title, author, year){
    console.log('Book Initialized');
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book1 = new Book('title1', 'author', 2000);
const book2 = new Book('title2', 'author', 2000);

console.log(book1.title);
console.log(book2.title + ' ' + book2.getSummary());
