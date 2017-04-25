'user strict';

var guardians = [];

try {
  guardians = JSON.parse(localStorage.guardians);
} catch(error){
  console.log('problem getting info', error);
}


var createDiv;
var guardiansList = document.getElementById('guardians-list');


function abc() {
  for(var i=0; i <guardians.length; i++) {
  createDiv = document.createElement('div');
  createDiv.textContent = guardians[i].guardianName;
  guardiansList.appendChild(createDiv);
  }
}
