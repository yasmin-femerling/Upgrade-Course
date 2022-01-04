let userInput: unknown;
let userName1 :string;

userInput = 5;
userInput = 'Max';
if(typeof userInput === 'string'){
    userName1 = userInput;
}

function generateError(message:string, code:number){
    throw {message:message, errorCode: code}
}

generateError('An error Occured!', 500);