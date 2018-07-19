//Object of Protos
const bookProtos = {
    getSummary: function (){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },    
    getAge: function (){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years}`;
    },
    revise: function(newYear){
        this.year = newYear;
        this.revised = true;
    }
}
//Create object
const book1 = Object.create(bookProtos);
book1.title = 'Adler';
book1.author = 'Pagliarini';
book1.year = '2018';
console.log(book1);

const book2 = Object.create(bookProtos, {
 title: { value: 'Adler' },
 author: { value: 'Pagliarini' },
 year: { value: '2018' }
});
console.log(book2);