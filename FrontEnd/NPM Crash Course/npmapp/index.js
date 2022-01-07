const _ = require('lodash');

const numbers = [33,46,33,7226,32,3];

_.each(numbers, function(number, index){
    console.log(number);
})
