// unlike getElementById which gives single element,it gives list of elements
//  so even if there is only one element, it will be inside a list at index 0
const x=document.getElementsByClassName('p');
document.getElementById("demo1").innerHTML='The first element is '+x[0].innerHTML;
document.getElementById("demo2").innerHTML='The second element is '+x[1].innerHTML;
document.getElementById('demo2').style.color='red';