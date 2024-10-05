const hamsterBTN = document.querySelector(".playarea__clicker");
const counnter = document.querySelector(".counter");
const zero = document.querySelector(".counter__current");
const power1 = document.querySelector("#powerups")



let counter = +localStorage.getItem("score");

zero.innerHTML = counter

let click = 1;

power1.addEventListener("click", () =>{
 
   click+= 1
})

hamsterBTN.addEventListener("click", () =>{
    counter += click
    zero.innerHTML = counter
})

setInterval(() => {
    localStorage.setItem("score", counter)
},1000)