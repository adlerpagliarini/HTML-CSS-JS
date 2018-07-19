class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    static topBookStore(){
        return 'Dont need to create object';
    }
}

class Magazine{
    constructor(title, author, year, month){
        this.book = new Book(title, author, year);
        this.month = month;
    }
    getSummary(){
        return `Mag: ${this.book.getSummary()}`;
    }
}

//Instantiate Object
const magazine1 = new Magazine('Adler', 'Paglairini', 2000, 12);

console.log(magazine1);

//Easier than use inheritence with objects
console.log(magazine1.book.getSummary());
console.log(magazine1.getSummary());
console.log(Book.topBookStore());