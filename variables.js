// let don't allow redeclaration,but allows reassignment
let data="hello";
data=42;
console.log(data)

// const neither allows redeclaration nor reassignment
// but object properties and array elements can still be modified.
const fname="avinash"
// name="pandu"
console.log(fname)

const person={"name":"Alice","age":22}
console.log(person)
person.name='jiang xi'
console.log(person)

const numbers=[1,2,3]
numbers.push(4);
numbers[0]=999
console.log(numbers);



