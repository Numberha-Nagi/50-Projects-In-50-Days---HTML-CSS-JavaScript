
"use strict";

/* document.addEventListener("scroll", (event) => {InitializeVariablesAndEventListers("scroll");}); */

/* document.onscroll = (event) => {InitializeVariablesAndEventListers("onscroll");}; */

/* document.addEventListener("readystatechange", (event) => {InitializeVariablesAndEventListers("readystatechange");}); */

/* document.onreadystatechange = (event) => {InitializeVariablesAndEventListers("onreadystatechange");}; */

/* document.addEventListener("DOMContentLoaded", (event) => {InitializeVariablesAndEventListers("DOMContentLoaded");}); */

setTimeout((event) => { InitializeVariablesAndEventListers("setTimeout2000"); }, 2000);

setTimeout((event) => { InitializeVariablesAndEventListers("setTimeout10000"); }, 10000);

/* document.addEventListener("focus", function (event) {InitializeVariablesAndEventListers("focus");}, true); */

document.addEventListener("focusin", function (event) { InitializeVariablesAndEventListers("focusin"); }, true);

/* document.addEventListener("pointerlockchange", (event) => {InitializeVariablesAndEventListers("pointerlockchange");}); */

/* document.onpointerlockchange = (event) => {InitializeVariablesAndEventListers("onpointerlockchange");}; */

let initialized = false;

function InitializeVariablesAndEventListers(caller) {
  //debugger;
  console.log(caller);
  if (initialized) { return; }
  initialized = true;

  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const container = document.querySelector(".we-container");

  open.addEventListener('click', () => {
    console.log(container);
  container.classList.add('show-nav')
});

  close.addEventListener('click', () => 
    container.classList.remove('show-nav'));

}
