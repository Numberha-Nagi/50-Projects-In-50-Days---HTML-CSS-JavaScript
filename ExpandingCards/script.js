
"use strict";

/* document.addEventListener("scroll", (event) => {InitializeVariablesAndEventListers("scroll");}); */

/* document.onscroll = (event) => {InitializeVariablesAndEventListers("onscroll");}; */

/* document.addEventListener("readystatechange", (event) => {InitializeVariablesAndEventListers("readystatechange");}); */

/* document.onreadystatechange = (event) => {InitializeVariablesAndEventListers("onreadystatechange");}; */

/* document.addEventListener("DOMContentLoaded", (event) => {InitializeVariablesAndEventListers("DOMContentLoaded");}); */

setTimeout((event) => {InitializeVariablesAndEventListers("setTimeout2000");}, 2000);

setTimeout((event) => {InitializeVariablesAndEventListers("setTimeout10000");}, 10000);

/* document.addEventListener("focus", function (event) {InitializeVariablesAndEventListers("focus");}, true); */

/* document.addEventListener("focusin", function (event) {InitializeVariablesAndEventListers("focusin");}, true); */

/* document.addEventListener("pointerlockchange", (event) => {InitializeVariablesAndEventListers("pointerlockchange");}); */

/* document.onpointerlockchange = (event) => {InitializeVariablesAndEventListers("onpointerlockchange");}; */


let initialized = false;

function InitializeVariablesAndEventListers(caller) {
  //debugger;
  console.log(caller);
  console.log(initialized);

  if (initialized) { return; }
  initialized = true;

 const panels =document.querySelectorAll(".panel");

  console.log(panels[0]);
  
  panels.forEach((panel)=>{
    console.log(panel); 
    panel.addEventListener('click', (event)=>{
      //debugger;
      //console.log(panel);
      //event.target.style.background = "pink";
      removeActiveClasses(panels);
      panel.classList.add('active');

    })
  })
 
}

function removeActiveClasses(panels){
  panels.forEach((panel)=>{
    panel.classList.remove("active");
  })
}