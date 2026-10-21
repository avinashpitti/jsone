let e1=document.getElementById('title');
e1.innerHTML+= " Avinash";
e1.innerText="Suresh";
e1.textContent+=" Harsha";

const x=document.getElementById("main");
const y=x.getElementsByTagName('p');

document.getElementById('demo').innerHTML='The first element is '+y[0].innerHTML;
