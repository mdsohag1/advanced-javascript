//slice
const nums = [1,2,3,4,5,6,7,8]
const part = nums.slice(2, 5)
console.log(part)

//splice
const part2 = nums.splice(2, 5, 77, 88, 55)
console.log(part2)
console.log(nums)


//join
const toggether = nums.join(", ")
console.log(toggether)