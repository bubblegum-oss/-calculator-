// CALCULATOR PROGRAM

window.addEventListener("load", (ev) => {
     console.log("hii")
     // var display = document.getElementById("display");
     Object.values(document.getElementsByClassName("cbutton")).forEach((button) => {
         button.addEventListener("click", (evc) => {
             document.getElementById("display").innerHTML += button.innerHTML
         })
     })
 
     document.getElementById("equal-btn").addEventListener("click", (ev) => {
         document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML)
     })
 
     document.getElementById("clear-btn").addEventListener("click", (ev) => {
         document.getElementById("display").innerHTML = "0"
     })
 
 })
 
 
 // can you try again?
 // I'll explain this code to you <3
 