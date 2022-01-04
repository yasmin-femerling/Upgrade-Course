"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHable(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult((add(5, 12)));
let combinedValues;
combinedValues = add;
addAndHable(10, 20, (result) => {
    console.log(result);
});
