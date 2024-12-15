// index.js
import { testing } from "./place-holder.js";
import "./styles.css";
console.log(testing);

import newton from "./images/sir-isaac-newton.jpeg";
import swift from "./images/swift.jpg";
import locke from "./images/locke.jpeg";
import voltaire from "./images/voltaire.jpg";


//Create newton pic in dom 
const imgNewton = document.createElement("img");
imgNewton.src = newton;

const frame = document.getElementById("showPic")

//Create swift pic in dom
const imgSwift = document.createElement("img");
imgSwift.src = swift;

//Create locke in dom 
const imgLocke= document.createElement("img");
imgLocke.src = locke;

//Create voltaire in dom 
const imgVoltaire= document.createElement("img");
imgVoltaire.src = voltaire;


let picArray = [imgNewton, imgSwift, imgLocke, imgVoltaire]

const dot = document.getElementsByClassName("dot");


let num = 3
let timer;

function startInterval() {
    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(() => {
       forward();
    }, 5000);  
}

function forward() {
   
    for(let i = 0; i < dot.length; i++) {
        dot[i].style.backgroundColor=""
     }
    frame.innerHTML = "";  
    if (num===3){
        num=0
    }
    else {
        num ++
    }
    frame.appendChild(picArray[num]); 
    console.log(num)
    for(let i = 0; i < dot.length; i++) {
        if (i===num)
        dot[i].style.backgroundColor="black"
     }
    startInterval();
}


function back() {
    for(let i = 0; i < dot.length; i++) {
        dot[i].style.backgroundColor=""
     }
    frame.innerHTML = "";
    if (num===0){
        num=3
    }
    else {
        num --
    }
    console.log(num)
    frame.appendChild(picArray[num]);
    for(let i = 0; i < dot.length; i++) {
        if (i===num)
        dot[i].style.backgroundColor="black"
     }
     startInterval();
}

forward();

let arrowRight = document.querySelector(".arrow-right");
let arrowLeft = document.querySelector(".arrow-left")

arrowRight.addEventListener("click",forward)
arrowLeft.addEventListener("click", back)

const circles = document.querySelectorAll('.dot');

circles.forEach(circle => {
    circle.addEventListener('click', function() { 
        for(let i = 0; i < dot.length; i++) {
            dot[i].style.backgroundColor=""
         }
         frame.innerHTML = "";  
        this.style.backgroundColor="black"
        const dotValue = this.dataset.value;
        num=dotValue;
        frame.appendChild(picArray[num]);
        startInterval();
    });
});