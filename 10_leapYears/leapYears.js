const leapYears = function(inputYear) {

    //check if divisible by 100
    if(inputYear % 100 == 0){
        if(inputYear/100 % 4 == 0){
            return true;
        }
        else{
            return false;
        }
    }

    //check if divible by 4
    if(inputYear % 4 == 0){
        return true;
    }
    else{
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
