/******************************************/
/*Closures*/
// Clouse is a function that has access to a private _variable
/******************************************/

const closure = function () {
    let message = 'Hello World! - Closure';
    return function () {
        return function () {
            return message;
        }
    }
}

const closureNoConstructor = function (msg) {
    this.message = msg;
    return function () {
        return function () {
            return message;
        }
    }
}

const ClosureConstructorNew = function (msg) {
    this.msg = 'INNER' + msg;
    let _variable = 'variable';

    this.myFunctionToReturnThis = function () { // msg OK, this NOT
        return function () {
            return msg + ' || ' + this.msg;
        }
    }
    this.myFunctionToReturnThisArrow = () => { // msg OK, this OK
        return () => {
            return msg + ' || ' + this.msg;
        }
    }
    this.myFunctionToReturnThisLoosingAccess = () => { // msg OK, this NOT
            return {
                losedAccess: function() {                
                    return (`${msg} ||  ${this.msg}`);
                }
            }
    }
    this.myFunctionToReturnThisGetAccessWithArrow = () => { // msg OK, this OK
        return {
            losedAccess: () => {                
                return (`${msg} ||  ${this.msg}`);
            }
        }
    }

    this.myFunctionToReturnVariable = function () { // variable OK
        return function () {
            return _variable;
        }
    }
    this.myFunctionToReturnVariableArrow = () => { // variable OK
        return () => {
            return _variable;
        }
    }
    this.myFunctionToReturnVariableLoosingAccess = () => { // variable OK
            return {
                losedAccess: function() {                
                    return (`${_variable}`);
                }
            }
    }
    this.myFunctionToReturnVariableGetAccessWithArrow = () => { // variable OK
        return {
            losedAccess: () => {                
                return (`${_variable}`);
            }
        }
    }

}

ClosureConstructorNew.prototype.myPrototypeFunctionToReturnThis = function (){
    return 'msg PARM will be not Defined' + ' || ' + this.msg;
}

ClosureConstructorNew.prototype.myPrototypeFunctionToReturnThisArrow = () => { // this NOT
    return 'msg PARM will be not Defined' + ' || ' + this.msg;
}

ClosureConstructorNew.prototype.myPrototypeFunctionToReturnVariable = function (){ // variable NOT
    return 'not Defined _variable';
}

ClosureConstructorNew.prototype.myPrototypeFunctionToReturnVariableArrow = () => { // variable NOT
    return 'not Defined _variable';
}

/**********************************************************************************/
console.log(closure, closure.message, closure()(), closure()()());
console.log('');

const c = closureNoConstructor('HI-Without-Constructor');
console.log('I just have access to message, whether I use NEW or if I a return it such as function ()()');
console.log(c, c.message, c()());

console.log('');
const cnew = new ClosureConstructorNew('PARM');
console.log(cnew, cnew.msg);

console.log('');
console.log('1-', 'myFunctionToReturnThis', cnew.myFunctionToReturnThis()());
console.log('1-', 'myFunctionToReturnThisArrow', cnew.myFunctionToReturnThisArrow()());
console.log('1.1-','myFunctionToReturnThisLoosingAccess', cnew.myFunctionToReturnThisLoosingAccess().losedAccess());
console.log('1.1-', 'myFunctionToReturnThisGetAccessWithArrow', cnew.myFunctionToReturnThisGetAccessWithArrow().losedAccess());
console.log('Proto', Object.getPrototypeOf(cnew));
console.log('1.2-', cnew.myPrototypeFunctionToReturnThis());
console.log('1.2-', cnew.myPrototypeFunctionToReturnThisArrow());
console.log('');

console.log('');
console.log('2-', 'myFunctionToReturnVariable', cnew.myFunctionToReturnVariable()());
console.log('2-', 'myFunctionToReturnVariableArrow', cnew.myFunctionToReturnVariableArrow()());
console.log('2.1-','myFunctionToReturnVariableLoosingAccess', cnew.myFunctionToReturnVariableLoosingAccess().losedAccess());
console.log('2.1-', 'myFunctionToReturnVariableGetAccessWithArrow', cnew.myFunctionToReturnVariableGetAccessWithArrow().losedAccess());
console.log('Proto', Object.getPrototypeOf(cnew));
console.log('2.2-', cnew.myPrototypeFunctionToReturnVariable());
console.log('2.2-', cnew.myPrototypeFunctionToReturnVariableArrow());
console.log('');