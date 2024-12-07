import "./styles.css";
import { greeting } from "./greeting";

import ghost from "./ghost.png";

const image = document.createElement('img');
image.src = ghost;



document.body.appendChild(image);


console.log(greeting);