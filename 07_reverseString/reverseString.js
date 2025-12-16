const reverseString = function(inputStr) {

    let reversedStr = "";
    let inputLen = inputStr.length;

    for(let i = inputLen -1;i>=0; i--){
        reversedStr += inputStr[i];
    }

    return reversedStr;

};

// Do not edit below this line
module.exports = reverseString;
