const companies = [
  {name:"Company 1", category: "Finance", start: 1981, end:2003},
  {name:"Company 2", category: "Retail", start: 1992, end:2008},
  {name:"Company 3", category: "Auto", start: 1999, end:2007},
  {name:"Company 4", category: "Reatil", start: 1989, end:2010},
  {name:"Company 5", category: "Technology", start: 2009, end:2014},
  {name:"Company 6", category: "Finance", start: 1987, end:2010},
  {name:"Company 7", category: "Auto", start: 1986, end:1996},
  {name:"Company 8", category: "Technology", start: 2011, end:2016},
  {name:"Company 9", category: "Retail", start: 1981, end:1989},
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*for(let i = 0; i < companies.length; i++){
  console.log(companies[i]);
}*/
// forEach
console.log("// forEach");
companies.forEach(function(company, index, entireArray){
  console.log(company);
});

// filter
console.log("// filter");
const canDrink = ages.filter(function(age){
  if(age >= 21){
      return true;
  }
});

console.log(canDrink);
const canDrinkEs6 = ages.filter(age => age >= 21);
console.log(canDrinkEs6);

const retailCompanies = companies.filter(function(company){
  if(company.category === 'Retail'){
      return true;
  }
});
console.log(retailCompanies);

const retailCompaniesEs6 = companies.filter(c => c.category === 'Retail');
console.log(retailCompaniesEs6);

const retailCompaniesEs6Parms = companies.filter( (c,i) => c.category === 'Retail' && i > 5);
console.log(retailCompaniesEs6Parms);

const companiesLastedTenYears = companies.filter(c => (c.end - c.start) >= 10);
console.log(companiesLastedTenYears);

// map
console.log("// map");
// Create array of company names
const companyNames = companies.map(function(company){
  return company.name;
})
console.log(companyNames);

const companyNamesE6 = companies.map(c => c.name + ' - ' + c.category);
console.log(companyNamesE6);

const companyNamesE62 = companies
                      .map(c => c.name + ' - ' + c.category)
                      .map(cc => cc + cc);
console.log(companyNamesE62);

// sort
console.log("// sort");
const sortedCompanies = companies.sort(function(c1, c2){
  if(c1.start > c2.start){
      return 1;
  }else{
      return -1;
  }
})
console.log(sortedCompanies);

const sortedCompaniesE6 = companies.sort((c1, c2) => (c1.start > c2.start) ? 1 : -1);
console.log(sortedCompaniesE6);

const sortAges = ages.sort((a, b) => a -b);
console.log(sortAges);

// reduce
console.log("// reduce");
const sumAges = ages.reduce(
  function(total, age){
      return total + age;
  },0 //starts from 0
);
console.log(sumAges);

const sumAgesE6 = ages.reduce((total, age) => total + age, 0);
console.log(sumAgesE6);


// Combine
const combined = ages.map(age => age * 2).reduce((total,age) => total + age, 0);
console.log(combined);

const combined2 = ages.map(age => age * 2)
                    .filter(age => age >= 40)
                    .sort((a,b) => a - b);
console.log(combined2);


// Implemeting MAP and Update obj properties
const newArrayAfterMap = companies.map(obj => ({...obj, name: "newValueForName", category: "newValueForCategory"}));
console.log('newArrayAfterMap:', newArrayAfterMap);

Array.prototype.mapp = function(modifiedFunctionMap){
  let result = [];
  console.log('modifiedFunctionMap: ', modifiedFunctionMap);
  this.forEach(item => result.push(modifiedFunctionMap()(item)));

  return result;
}

const newArrayAfterMapModified = companies.mapp(obj => (function (){return {...obj, name: "newValueForName", category: "newValueForCategory"}}));
console.log('newArrayAfterMapModified:', newArrayAfterMapModified);


Array.prototype.mappp = function(modifiedFunctionMap){
  let result = [];
  console.log('modifiedFunctionMap: ', modifiedFunctionMap);
  this.forEach(item => result.push(modifiedFunctionMap(item)));

  return result;
}

const newArrayAfterMapModified2 = companies.mappp(obj => ({...obj, name: "newValueForName", category: "newValueForCategory"}));
//same as above line
//const newArrayAfterMapModified2 = companies.mappp(obj => {return {...obj, name: "newValueForName", category: "newValueForCategory"}});
console.log('newArrayAfterMapModified2:', newArrayAfterMapModified2);

// Implemeting Reduce and get sum and higest start value

// SUM values in Arrays
const sumStart = [1,2,3].reduce((acc, current) => {return acc + current});
console.log('SumStart', sumStart);

Array.prototype.reducee = function(operate, initialValue){
  let accumulatedValue = initialValue || this[0];
  console.log(initialValue);
  let startIndexAt = initialValue ? 0 : 1;

  for (let i = startIndexAt; i < this.length; i++){
    accumulatedValue = operate(accumulatedValue, this[i]);
  }

  return accumulatedValue;
}

const sumStart2 = [1,2,3].reducee((acc, current) => {return acc + current});
console.log('sumStart2', sumStart2);

const sumCompanyStart = companies.map(obj => obj.start).reduce((acc, current) => acc + current);
console.log('sumCompanyStart', sumCompanyStart);

const sumCompanyStart2 = companies.map(obj => obj.start).reducee((acc, current) => acc + current);
console.log('sumCompanyStart2', sumCompanyStart2);

const sumCompanyStart3 = companies.reduce((acc, current) => { 
  return { name: acc.name, start: acc.start + current.start}
}, {name: 'Total', start: 0});
console.log('sumCompanyStart3', sumCompanyStart3);


// HIGHEST START
const startCompanyHigest = companies.reduce((acc, current) => { 
  if(acc.start > current.start)
      return acc;
  else
      return current;
});
console.log('startCompanyHigest', startCompanyHigest);

const startCompanyHigest2 = companies.reduce((acc, current) => { 
  if(acc.start > current.start) 
     return {name: acc.name, start: acc.start};
  else 
     return {name: current.name, start: current.start };
});
console.log('startCompanyHigest2', startCompanyHigest2);