var tips = 21;

function sum (first, second = 4){
    let result = first + second +tips;
    if(result > 20){
        return result;
    }
    else {
        var mood = "Happy";
        // console.log(mood);
    }
    console.log(mood);
} 
const equal = sum(10, 10);
console.log(equal);
