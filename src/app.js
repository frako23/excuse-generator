/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ["perro", "hijo", "hermanito", "vecino"];
  let accion = ["se comió", "rompió", "explotó", "perdió"];
  let que = ["mi tarea", "tu celular", "tu carro", "tu laptop"];

  let excuseP = document.querySelector("#excuse");
  excuseP.textContent =
    "Mi" +
    " " +
    quien[Math.floor(Math.random() * 4)] +
    " " +
    accion[Math.floor(Math.random() * 4)] +
    " " +
    que[Math.floor(Math.random() * 4)];

  console.log("Hello Rigo from the console!");
};
