const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const textError = (function() {
    return (message) =>  { return {msg: `t => ${message}`, name: 'TextFactoryIIFEError' }};
})();

const TextError = function(message) {
    return {msg: `T => ${message}`, name: 'TextConstructorError' };
};

const toHackerCase = function (text) {    
    if (!text) // 0 NaN false null undefined
        throw ({T: new TextError('Invalid Text!'), t: textError('Invalid Text')});
    if(typeof(text) !== "string")
    throw ({T: new TextError('Invalid Type!'), t: textError('Invalid Type!')});

    const toHackerCaseArray = new Array();
    for(let i = 0; i < text.length; i++)
    {
        switch (text.charAt(i)){
            case "o" :
                toHackerCaseArray.push(0);
                break;
            case "l" :
                toHackerCaseArray.push(1);
                break;
            default : 
                toHackerCaseArray.push(text.charAt(i));
        }
    }
    return toHackerCaseArray.join("");
}

try{
    console.log(toHackerCase(''));
}
catch(e){
    console.log(e, e.T.name, e.t.name);
}
finally{
    console.log('finally');
}

try{
    console.log(toHackerCase(1));
}
catch(e){
    console.log(e, e.T.name, e.t.name);
}
finally{
    console.log('finally');
}

console.log(toHackerCase(text));