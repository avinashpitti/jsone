// objects : objects store data in key:value pairs
let student={
    "name":"Avinash",
    "course":"BCA",
    "age":21,
    "city":"Bengaluru"
}

console.log(student);
console.log(student.name);
console.log(student['course']);
console.log(student.name,student.city);
console.log("course:",student.course);
console.log(`name: ${student.name}`);

for(let key in student){
    console.log(`${key}:${student[key]}`);
}

// modern way
console.log("using object entries")
Object.entries(student).forEach(([key,value])=>{
    console.log(`${key}:${value}`)
});