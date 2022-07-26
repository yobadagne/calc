const clearAll=document.getElementById("clearAll");
const divide=document.getElementById("divide");
const multiply=document.getElementById("multiply");
const clear=document.getElementById("clear");
const seven=document.getElementById("seven");
const eight=document.getElementById("eight");
const nine=document.getElementById("nine");
const plus=document.getElementById("plus");
const four=document.getElementById("four");
const five=document.getElementById("five");
const six=document.getElementById("six");
const minus=document.getElementById("minus");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const zero=document.getElementById("zero");
const dot=document.getElementById("dot");
const equal=document.getElementById("equal");
const display=document.getElementById("display");

//function for each buttons
function addition (a,b){
    display.innerHTML=a+b;
    
}





// function subtraction (a,b){
//     display.innerHTML=a-b;
    
// }
// function clearAll(){
//     display.innerHTML="";
// }
function division (a,b){
     display.innerHTML=a/b;
    
 }
function multiplication (a,b){
    display.innerHTML=a*b;
    const value=display.textContent;
    console.log(value);
}
// function clears(){
//     const value=display.textContent;
//     console.log(value);
// }
//let's add event listner
var text="";
clearAll.addEventListener("click",function(){display.innerHTML=""});
divide.addEventListener("click",function(){text=display.textContent;text+="/";display.innerHTML=text});

multiply.addEventListener("click",function(){text=display.textContent;text+="*" ;display.innerHTML=text});

clear.addEventListener("click",function(){text=display.textContent;text=text.slice(0,-1);display.innerHTML=text});
seven.addEventListener("click",function(){text=display.textContent;text+=7;display.innerHTML=text});
eight.addEventListener("click",function(){text=display.textContent;text+=8;display.innerHTML=text});
nine.addEventListener("click",function(){text=display.textContent;text+=9;display.innerHTML=text});
plus.addEventListener("click",function(){text=display.textContent;text+="+";display.innerHTML=text});
four.addEventListener("click",function(){text=display.textContent;text+=4;display.innerHTML=text});
five.addEventListener("click",function(){text=display.textContent;text+=5;display.innerHTML=text});
six.addEventListener("click",function(){text=display.textContent;text+=6;display.innerHTML=text});
minus.addEventListener("click",function(){text=display.textContent;text+="-";display.innerHTML=text});
one.addEventListener("click",function(){text=display.textContent;text+=1;display.innerHTML=text});
two.addEventListener("click",function(){text=display.textContent;text+=2;display.innerHTML=text});
three.addEventListener("click",function(){text=display.textContent;text+=3;display.innerHTML=text});

zero.addEventListener("click",function(){text=display.textContent;text+=0;display.innerHTML=text});
dot.addEventListener("click",function(){text=display.textContent;text+=".";display.innerHTML=text});

 equal.addEventListener("click",function(){
    display.innerHTML=eval(display.textContent)});
   
    // The operation
