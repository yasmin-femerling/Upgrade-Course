function add2(n1: number, n2:number){
    return n1 + n2;
}

function printResult(num:number):void{
    console.log('Result: '+num);
}

function addAndHable(n1:number, n2:number, cb: (num:number) => void){
    const result = n1 + n2;
    cb(result);
}

printResult((add(5,12)));

let combinedValues: (a: number, b:number) => number;

combinedValues = add;

addAndHable(10,20, (result) => {
    console.log(result);
})