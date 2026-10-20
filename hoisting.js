// Hoisting is javascript's default behaviour of moving variables and
// function declarations to the top of their scope during compilation.
// only the declaration is hoisted not the initialization.

hello();
function hello(){
    console.log("hello guys")
}

console.log(myname);
var myname="avinash";// undefined if declared with let or const error
// temporal dead zone is the period between when a let or const variable
// is hoisted and when it is actually initialized.

