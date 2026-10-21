let nums=[1,2,3,4,5]
console.log(nums)
console.log(nums.length)
console.log(typeof(nums))
nums.pop() // removes exactly one element at end
console.log(nums);
nums.push(5,6) // add any number of elements
console.log(nums);

nums.unshift(10,20,30)
console.log(nums); // add any number of elements at start
nums.shift()// remove exactly one element at start
console.log(nums);

console.log(nums.includes(3))
console.log(nums.includes(777))
console.log(nums.indexOf(3)) // if exists it gives the index no
console.log(nums.indexOf(777)) // if doesn't exists it gives -1


let arr=[10,20,30,40,20,40,25,40]
console.log(arr.indexOf(20)) // first occurrence of 20
console.log(arr.lastIndexOf(40)) // last occurence of 40
console.log(arr.find(x=>x>20)) // the immediate value >20

//slice : It doens't support skip start and step value in JS
const fruits=["apple","banana","avocado","berry","cherry","dragon",]
console.log(fruits);
console.log(fruits.slice(1,3))
console.log(fruits.slice(1,))
console.log(fruits.slice(1))
console.log(fruits.slice(-2)) // prints last 2 elements
console.log(fruits.slice().reverse())

// splice :It adds,removes,replaces directly to the array
const colors=['red','green','blue']
console.log(colors);
const removed=colors.splice(1,1,'violet','indigo','yellow')
// The above syntax means start at index 1,remove 1 element,then insert those 3 colors

console.log(removed)
console.log(colors);
console.log(colors.indexOf("blue"))

// sort array
let frts=['mango','banana','avocado','apple','berry']
console.log(fruits.sort())

// numbers need a compare function, it doens't work directly as strings.
let numbers=[34,7,19,2,44]
console.log(nums.sort((a,b)=>a-b))
console.log(nums.sort((a,b)=>b-a))

// map() : Transform each element in an array
let values=[1,2,3,4]
let doubled=values.map(values=>values*2)
let squared=values.map(values=>values**2)
console.log(doubled);
console.log(squared);

// filter: when you want to filter
let pickodds=[1,2,3,4,5]
let odds=pickodds.filter(p=>p%2===1)
console.log(odds)

//reduce: It takes an entire array and reduces it down to a single value
const cart=[10,20,30,40];
const total=cart.reduce((sum,price)=>sum+price,0);
// the 0 is the initial value of the sum(accumulator)
console.log(total);

// forEach() : when you want to do something(no return)
let some_nums=[1,2,3,4,5]
some_nums.forEach(n=>{
    console.log(n)
})
