const sumAll = function(number1, number2) {

    //check if the inputs are integers

    if(Number.isInteger(number1) == false || Number.isInteger(number2) == false){
        return "ERROR";
    }

    //check if the inputs are non-negative

    if(number1 < 0 || number2 < 0){
        return "ERROR";
    }

    //check if number 1 is greater than number 2
    if(number1 > number2){
        let temp = number1;
        number1 = number2;
        number2 = temp;
    }

    let sum = 0;
    for(let i=number1; i<=number2;i++){
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
