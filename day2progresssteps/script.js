
"use strict";

/* document.addEventListener("scroll", (event) => {InitializeVariablesAndEventListers("scroll");}); */

/* document.onscroll = (event) => {InitializeVariablesAndEventListers("onscroll");}; */

/* document.addEventListener("readystatechange", (event) => {InitializeVariablesAndEventListers("readystatechange");}); */

/* document.onreadystatechange = (event) => {InitializeVariablesAndEventListers("onreadystatechange");}; */

/* document.addEventListener("DOMContentLoaded", (event) => {InitializeVariablesAndEventListers("DOMContentLoaded");}); */

setTimeout(() => { InitializeVariablesAndEventListers("setTimeout2000"); }, 2000);

setTimeout(() => { InitializeVariablesAndEventListers("setTimeout10000"); }, 10000);

/* document.addEventListener("focus", function (event) {InitializeVariablesAndEventListers("focus");}, true); */

document.addEventListener("focusin", function (event) { InitializeVariablesAndEventListers("focusin"); }, true);

/* document.addEventListener("pointerlockchange", (event) => {InitializeVariablesAndEventListers("pointerlockchange");}); */

/* document.onpointerlockchange = (event) => {InitializeVariablesAndEventListers("onpointerlockchange");}; */

let initialized = false;

function InitializeVariablesAndEventListers(caller) {
  //debugger;
  if (initialized) { return; }
  initialized = true;

  const progress = document.getElementById('progress');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const circles = document.querySelectorAll('.circle');
  
  let currentActive = 1;

  next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
      currentActive = circles.length;
    }
    update(circles, currentActive);
  });

  prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
      currentActive = 1;
    }
    update(circles, currentActive);
  });
}

function update(circles, currentActive) {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else if (idx >= currentActive) {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  let percentage = "";

  if (actives.length == 2) {
    percentage = "33%";
    prev.disabled = false;
    next.disabled = false;
  } else if (actives.length == 3) {
    percentage = "66%";
    prev.disabled = false;
    next.disabled = false;
  } else if (actives.length == 4) {
    percentage = "100%";
    prev.disabled = false;
    next.disabled = true;
  } else {
    /* actives.length is 0 */
    percentage = "0";
    prev.disabled = true;
    next.disabled = false;
  }

  progress.style.width = percentage;

  /* below code works too */
  /* progress.style.width =(actives.length-1)/(circles.length-1) *100 + "%"; 

  of(currentActive === 1){
    prev.disabled = false;
  } if (currentActive === circles.length) {
    next.disabled = false;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
*/

}
