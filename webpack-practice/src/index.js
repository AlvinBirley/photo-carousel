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

   
frame.appendChild(picArray[3]);





