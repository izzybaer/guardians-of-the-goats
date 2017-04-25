'user strict';

var guardians = [];

try {
  guardians = JSON.parse(localStorage.guardians);
} catch(error){
  console.log('problem getting info', error);
}


function guardianField() {
  var guardiansList = document.getElementById('guardians-list');
  var div;
  var infoField;
  for(var i=0; i <guardians.length; i++) {
    div = document.createElement('div');
    guardiansList.appendChild(div);

    infoField = document.createElement('p');
    infoField.textContent = guardians[i].guardianName;
    div.appendChild(infoField);

    infoField = document.createElement('p');
    infoField.textContent = guardians[i].guardianLocation;
    div.appendChild(infoField);

    infoField = document.createElement('p');
    infoField.textContent = guardians[i].guardianContact;
    div.appendChild(infoField);

    infoField = document.createElement('p');
    infoField.textContent = guardians[i].serviceOffered;
    div.appendChild(infoField);
  }
}

guardianField();
