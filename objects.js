// objects : objects store data in key:value pairs
let student={
    name:"Avinash",
    course:"BCA",
    age:21,
    city:"Bengaluru"
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

// adding,updating and deleting a property
let person={
    name:"Alice",
    age:25,
    country:"Australia"
}

person.city="perth";
console.log(person);

delete person.age;
console.log(person);

person.name='Alex';
console.log(person);
