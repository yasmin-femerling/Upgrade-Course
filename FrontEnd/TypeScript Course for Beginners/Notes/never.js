"use strict";
let userInput;
let userName1;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName1 = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error Occured!', 500);
