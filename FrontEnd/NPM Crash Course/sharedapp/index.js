const _ = require('lodash');

const numbers = [33,46,33,76,32,3];

_.each(numbers, function(number, index){
    console.log(number);
})
