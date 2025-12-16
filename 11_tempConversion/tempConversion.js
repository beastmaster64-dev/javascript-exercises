const convertToCelsius = function(inputTemperature) {

  let outputTemperature = (inputTemperature - 32)*(5/9);
  
  return Math.round(outputTemperature*10)/10;
};

const convertToFahrenheit = function(inputTemperature) {

  let outputTemperature = inputTemperature*(9/5) + 32;

  return Math.round(outputTemperature*10)/10;


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
