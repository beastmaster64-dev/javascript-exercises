const removeFromArray = function(inputArr, ...removeNums) {

    function checkNum(num){
        return !removeNums.includes(num); 
    }

    return inputArr.filter(checkNum);

};

// Do not edit below this line
module.exports = removeFromArray;
