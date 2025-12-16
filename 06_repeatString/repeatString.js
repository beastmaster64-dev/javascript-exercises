const repeatString = function(input_str, num_repeat) {

    if(num_repeat<0){
        return "ERROR";
    }

    if(num_repeat == 0){
        return '';
    }

    let output_str = input_str;
    for(let i=2;i<=num_repeat;i++){
        output_str += input_str;
    }

    return output_str;

};

// Do not edit below this line
module.exports = repeatString;
