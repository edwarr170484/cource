'use strict';

function operate(number, operation = null){
    if(operation){
        switch(operation.kind){
            case 'plus':
                return number + operation.value;
            break;
            case 'minus':
                return number - operation.value;
            break;
            case 'mul':
                return number * operation.value;
            break;
            case 'div':
                return number / operation.value;
            break;
        }
    }else{
        return number;
    }
}

function one(operation = null){
    return operate(1, operation);
}

function four(operation = null){
    return operate(4, operation);
}

function plus(value){
    return {
        kind: 'plus',
        value: value
    }
}

function minus(value){
    return {
        kind: 'minus',
        value: value
    }
}

console.log(four(plus(one())));
console.log(four(minus(one())));