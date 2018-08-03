var theModule = require("./myModule.js");



const numberArray = [3,4,100,34,65];

var createNumbers = function(array){
    numberArray.forEach(function(num){
    theModule.takeNumber(num);
    }
  );

}

createNumbers(numberArray);
console.log(theModule.sorted());