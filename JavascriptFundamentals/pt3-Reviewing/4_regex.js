let regExp1 = /abc/;
regExp1 = new RegExp("abc");

let regExp = /^\(15\) 9999-9999$/;
// ^ must be the begin
// $ must be the end
let phone = "The number is: (15) 9999-9999, please call me back.";


let regExp2 = /\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
let phone2 = "The number is: (15) 1234-9999, please call me back.";


let regExp3 = /\([0-9]{2}\) [0-9]{4}-[0-9]{4}/;
// {n} - specific number
// {n,} - specific a min number
// {n,m} - specific a min and max number
let phone3 = "The number is: (15) 1234-9999, please call me back.";


let regExp4 = /\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}/;
let phone4 = "The number is: (15) 91234-9999, please call me back.";



let regExp5 = /\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}/;
// ? zero or one
// * zero or more
// + one or more
let phone5 = "The number is: (15) 912349999, please call me back.";


let regExp6 = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;
// ? zero or one
// * zero or more
// + one or more
let phone6 = "<table><tr><td>(15) 99989-9878</td><td>(15) 99989-9878</td><td>(15) 99989-9878</td></tr></table>";


let regExp7 = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;
// /w
// /W not /w
// /d
// /D not /d 
// /s
// /S not /s
let phone7 = "<table><tr><td>(15) 99989-9878</td><td>(15) 99989-9878</td><td>(15) 99989-9878</td></tr></table>";


//Getting phone from table
let regExp8 = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
//match - execute a search in the String and return array with the datas found.
//split
//replace
// modifiers = i case-insensitive, g - global, m - multiline
let phone8 = "<table><tr><td>(15) 99989-9878</td><td>(15) 99989-9878</td><td>(15) 99989-9878</td></tr></table>";



console.log(regExp.exec(phone), regExp.test(phone));
console.log(regExp2.exec(phone2), regExp2.test(phone2));
console.log(regExp3.exec(phone3), regExp3.test(phone3));
console.log(regExp4.exec(phone4), regExp4.test(phone4));
console.log(regExp5.exec(phone5), regExp5.test(phone5));
console.log(regExp6.exec(phone6), regExp6.test(phone6));
console.log(regExp7.exec(phone7), regExp7.test(phone7));
console.log(phone8.match(regExp8));
console.log(phone8.replace(regExp8, 'telefone'));