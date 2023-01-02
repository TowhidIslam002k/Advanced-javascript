function numbers(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const num1 = numbers();
console.log(num1());
console.log(num1());
console.log(num1());
console.log(num1());


const num2 = numbers();
console.log(num2());
console.log(num2());
console.log(num2());
console.log(num1());
console.log(num1());