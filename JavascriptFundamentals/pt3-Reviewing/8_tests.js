console.log('.');

// contains title and many other fields
const src1 = [
    { id: 1, title: 'title1' },
    { id: 2, title: 'title2' },
    { id: 3, title: 'title3' },
    { id: 4, title: 'title4' },
    { id: 5, title: 'title5' },
    { id: 6, title: 'title6' },
    { id: 7, title: 'title7' },
    { id: 8, title: 'title8' },
    { id: 9, title: 'title9' },
    { id: 10, title: 'title10' },
    { id: 11, title: 'title11' },
    { id: 12, title: 'title12' },
  ];
  
  // contains name and many other fields not listed in src1
  const src2 = [
    { id: 1, name: 'name1' },
    { id: 2, name: 'name2' },
    { id: 3, name: 'name3' },
    { id: 4, name: 'name4' },
    { id: 5, name: 'name5' },
    { id: 6, name: 'name6' },
    { id: 7, name: 'name7' },
    { id: 8, name: 'name8' },
    { id: 9, name: 'name9' },
    { id: 10, name: 'name10' },
    { id: 12, name: 'name12' },
    { id: 11, name: 'name11' }
  ];

  /***************************************************************************************/
src1.sort((a,b) => {
    return a.id - b.id;
});
src2.sort((a,b) => {
    return a.id - b.id;
});

for(let i = 0; i < src1.length; i++){
  if(src1[i].id == src2[i].id)
    console.log({ id: src1[i].id, title: src1[i].title, name: src2[i].name });
}

let result = src1.map((element) => {
    let elementTwo = src2.find(s => s.id == element.id);
    return ({...element, ...elementTwo});
})
console.log('result', result);

/***************************************************************************************/
function NewUser(name){
    this.name = name;

    this.getName = function(){
        return this.name;
    }
}

const user = new NewUser('test');
console.log('user', user.getName());

class NewUserc{

    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

const userc = new NewUserc('test');
console.log('userc', userc.getName());