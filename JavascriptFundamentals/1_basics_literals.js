const book1 = {
    title: 'adler',
    author: 'paglia',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getSummaryArrow: (title) => {
        this.title = "thisGetSummaryArrow"
        return `parm: ${title} this: ${this.title}`;
    },
    getSummaryfunctionArrow: function(title){
            console.log(title);
            console.log(this.title);
            let ar = (t) => {
                console.log(`Ar: parm: ${t} this: ${this.title}`);
            };
            ar('ar');
    },
    getArOut(){
        this.getSummaryfunctionArrow();
    }
}

console.log(book1.getSummary());
console.log(book1.getSummaryArrow('arrow'));
book1.getSummaryfunctionArrow('setBook');
book1.getArOut();
console.log(Object.values(book1));
console.log(Object.keys(book1));
console.log(book1);