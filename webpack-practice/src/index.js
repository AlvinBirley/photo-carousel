// index.js
import { testing } from "./place-holder.js";
import "./styles.css";
console.log(testing);

import odinImage from "./images/sir-isaac-newton.jpeg";
   
const image = document.createElement("img");
image.src = odinImage;
const frame = document.getElementById("showPic")
   
frame.appendChild(image);





