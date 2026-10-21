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