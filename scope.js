
const bonus = 10;

function sum(num1, num2) {
    let result = num1 + num2 + bonus

    if(result > 5){
        var mood = "happy"
            mood = "cragy"
            mood = "fancy"
    }
    console.log(mood)
    return result;
}

const allResult = sum(7, 3)
console.log(allResult)