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