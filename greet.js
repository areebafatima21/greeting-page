const button=document.querySelector("#greetButton")
function greet(){
 const name=   prompt ("WHAT'S YOUR NAME")
 const greeting=document.querySelector("#greeting")
 greeting.textContent=`hello ${name}, how are you?`;

}
button.addEventListener("click",greet);