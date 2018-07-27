/**************************************************/
//Module Pattern
/**************************************************/
/* Creating a Factory Function to create "Methods" privates and publics */
const createFactoryFunctionCounter = function () {
    let value = 0;

    const addPrivate = () => { return ++value; };

    return {
        addPublic: () => { return addPrivate(); } 
    }
}
console.log(createFactoryFunctionCounter().value);
console.log(createFactoryFunctionCounter().addPrivate);
console.log(createFactoryFunctionCounter().addPublic());

const counterF = createFactoryFunctionCounter();

console.log(counterF.value);
console.log(counterF.addPrivate);
console.log(counterF.addPublic());



const CreateConstructorFunctionCounter = function () {
    let value = 0;

    const addPrivate = () => { return ++value; };

    this.addPublic = () => { return addPrivate(); }
         
}
const counterC = new CreateConstructorFunctionCounter();
console.log(counterC.value);
console.log(counterC.addPrivate);
console.log(counterC.addPublic());

/**************************************************/
//IIFE - Immediately-Invoked Function Expression
/**************************************************/
const counterIIFE = (function(){
    let value = 0;
    
    const _addPrivate = () => { return ++value; };

    return {
        addPublic: () => { return _addPrivate(); }
    }
})();
console.log(counterIIFE.value);
console.log(counterIIFE.addPrivate);
console.log(counterIIFE.addPublic());

/**************************************************/
//IIFE - Immediately-Invoked Function Expression And Revealing Module Pattern
/**************************************************/
const counterIIFERV = (function(){
    let value = 0;
    
    const _addPrivate = () => { return ++value; };
    const _addPublic =  () => { return _addPrivate(); }

    return {
        add: _addPublic
    }
})();
console.log(counterIIFERV.value);
console.log(counterIIFERV._addPrivate);
console.log(counterIIFERV.add());
