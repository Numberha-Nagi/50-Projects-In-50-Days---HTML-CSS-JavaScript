
"use strict";

/* document.addEventListener("scroll", (event) => {InitializeComponents("scroll");}); */

/* document.onscroll = (event) => {InitializeComponents("onscroll");}; */

/* document.addEventListener("readystatechange", (event) => {InitializeComponents("readystatechange");}); */

/* document.onreadystatechange = (event) => {InitializeComponents("onreadystatechange");}; */

/* document.addEventListener("DOMContentLoaded", (event) => {InitializeComponents("DOMContentLoaded");}); */

setTimeout(() => { InitializeComponents("setTimeout2000"); }, 2000);

setTimeout(() => { InitializeComponents("setTimeout10000"); }, 10000);

/* document.addEventListener("focus", function (event) {InitializeComponents("focus");}, true); */

document.addEventListener("focusin", function (event) { InitializeComponents("focusin"); }, true);

/* document.addEventListener("pointerlockchange", (event) => {InitializeComponents("pointerlockchange");}); */

/* document.onpointerlockchange = (event) => {InitializeComponents("onpointerlockchange");}; */


let components_initialized = false;

function InitializeComponents(caller) {
  //debugger;
  //console.log(caller);
  if (components_initialized) { return; }
  components_initialized = true;

  ComponentSoundBoard_Initialize();
}


function ComponentSoundBoard_Initialize() {

  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

  sounds.forEach(sound => {
    let btn = document.createElement('button');
    btn.classList.add('we-btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
      StopSongs();
      document.getElementById(`we-${sound}`).play();
    });

    document.getElementById('we-buttons').appendChild(btn);
  });

  function StopSongs() {
    sounds.forEach(sound => {
      let song = document.getElementById(`we-${sound}`);
      song.pause();
      song.currentTime = 0;
    });
  }

}