"use strict";

window.onload = init;

function init() {
 const a = document.getElementById("addBtn");
 a.onclick = onAddBtnClicked; 
}

function onAddBtnClicked() {

    const nameField = document.getElementById("nameField");
    alert("Hi " + nameField.value);
}

// Subtract Btn Function

function init() {
    const subtractBtn = document.getElementById("subtractBtn");
    subtractBtn.onclick = onSubtractBtnClicked; 
   }
   
   function onSubtractBtnClicked() {
   
       const nameField = document.getElementById("nameField");
       alert("Hi " + nameField.value);
   }