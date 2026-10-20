// for of
const fruits=["apple","banana","orange"]
for(const fruit of fruits){
    console.log(fruit);
}

// for in
let person={"name":"Alice","age":22,"city":"Bengaluru"}
for(let key in person){
    console.log(key+": "+person[key])
}

// for each
let vegs=['carrot','brinjal','radish']
vegs.forEach(veg=>{
    console.log(veg);
})