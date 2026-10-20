// global scope : can be accessible from anywhere
let language="javascript"

function info(){
    console.log(language);
}
info()


// function scope : accessible only inside that function
function myFunc(){
    let framework="react"
    console.log(framework);
    console.log(language);
}
myFunc()
console.log(language)
// console.log(framework) // reference error

// Block scope : means anything delimited by a pair of curly braces{}
// such as inside an if condition,loops,or even a standalone {} block.
// var is not blockscoped, let and const are blockscoped

if(true){
    let blocklet="I am safe"
    const blockconst="me too"
    var blockvar="I escaped"
}

console.log(blockvar)
// console.log(blocklet)
// console.log(blockconst)

// lexical scope : inner functions have access to variables from their
//  outer(parent) scope based on where the function is defined,
//  not where it is called.

let grandparent="A";
function outer(){
    let parent="B";

    function inner(){
    let child="C";
    console.log(child);
    console.log(parent);
    console.log(grandparent);
}
inner();

}

outer();

