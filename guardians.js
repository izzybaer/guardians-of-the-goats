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
  var guardianDisplay;
  var infoField;
  for(var i=0; i <guardians.length; i++) {
    div = document.createElement('div');
    div.setAttribute('class', 'guardian-wrap');
    guardianDisplay = document.createElement('img');
    guardianDisplay.src = guardians[i].guardianImage;
    guardiansList.appendChild(div);
    div.appendChild(guardianDisplay);



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
