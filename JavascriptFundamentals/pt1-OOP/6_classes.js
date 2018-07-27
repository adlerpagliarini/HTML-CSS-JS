class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years}`;
    }

    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return 'Dont need to create object';
    }
}

Book.prototype.arrow = function(newYear){
    let v = (n) => {
        this.year = n;
    }
    v(newYear);
}

//Instantiate Object
const book1 = new Book('Adler', 'Paglairini', 2000);

console.log(book1);
console.log(book1.getSummary());
console.log(book1.arrow(2018));
console.log(book1.getSummary());
console.log(Book.topBookStore());