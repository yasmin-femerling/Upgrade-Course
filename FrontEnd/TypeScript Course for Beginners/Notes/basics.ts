//Core data types: number, string, boolean
// object, array, tuple, enum, any
function addN(n1: number,n2:number, showResult:boolean, phrase: string){
    //if(typeof n1 !== 'number' && typeof n2 !== 'number'){
    //
    //}
    const result = n1+n2;
    if(showResult){
        console.log(phrase + result);
    }else{
        return result;
    }
}

const number1=5;
const number2= 10;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = addN(number1,number2, true, resultPhrase);