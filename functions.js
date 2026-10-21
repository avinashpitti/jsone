function greets(yourname){
    console.log("hello "+yourname);
}
greets("Avinash");
greets("Rakesh");

function greeting(myname){
    // return "Hellov"+myname;
    return `hello, ${myname}`
}

console.log(greeting("Rajesh"))
console.log(greeting("Kiran"));

const greet=(ename)=>{
    return `Hello, ${ename}`
};
console.log(greet("jiangxi"));

// Rest parameters in Js allows a function to accept any number of arguments
// Rest parameter must be last in function

function rest(a,b,c,...d){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
rest(1,2,3,4,5,6,7,8)

// Destructuring parameters
function gret({name,age}){
    console.log(name);
    console.log(age);
}
gret({name:'Avi',age:22})


// generator function
function* nums(){
    yield 10;
    yield 20;
    yield 30;
}
for(let num of nums()){
    console.log(num);
}

// async: makes function return a promise
// await: pauses the function, wait for the promise to resolve
async function fetchData() {
    console.log("start");
    await new Promise(resolve=>setTimeout(resolve,3000));
    // 3000 is equals to 3 seconds
    console.log("End");
}
fetchData();