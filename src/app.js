/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let excuseElement = document.getElementsById("excuse");
  excuseElement.innerHTML = excuse;

  return (excuse =
    who[Math.floor(Math.random() * 4)] +
    action[Math.floor(Math.random() * 4)] +
    what[Math.floor(Math.random() * 3)] +
    when[Math.floor(Math.random() * 4)]);
};
