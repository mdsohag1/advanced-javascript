
const student = [
    {id: 124, name: "mannam"},
    {id: 254, name: "deepjal"},
    {id: 454, name: "shakib khan"},
    {id: 45, name: "khan"}
];


const studentName = [];
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    studentName.push(element.name)
}
console.log(studentName)



const names = student.map(s => s.name)
const ids = student.map(s => s.id)
const bigger = student.filter(s => s.id > 300)
console.log(bigger)