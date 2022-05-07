const numbers = [2, 3, 4, 5, 6, 7, 8]
const output = []
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element
    output.push(result)
}

console.log(output)


const result = numbers.map(x => x * x)
console.log(result)

const bigger = numbers.filter(x => x > 5)
console.log(bigger)




const marks = [12,45,787,124,121,454]
const result2= marks.map(x => x * x)
console.log(result2)

