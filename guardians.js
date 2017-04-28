'user strict';

var guardians = [];

try {
  guardians = JSON.parse(localStorage.guardians);
} catch(error){
  console.log('problem getting info', error);
}


function Guardian(guardianName, guardianLocation, guardianContact, serviceOffered, src){
  this.guardianName = guardianName;
  this.guardianLocation = guardianLocation;
  this.guardianContact = guardianContact;
  this.serviceOffered = serviceOffered;
  this.guardianImage = src;
}


function postDefaultGuardians(){
  var defaultGuardians = [
    new Guardian('Izzy', 'Seattle, WA', 'izzy@lovesdemgoats.com', 'I have never eaten a goat.', 'adorableGoat.jpg'),
    new Guardian('Evette', 'Seattle, WA', 'evette@hascoolshoes.com', 'I will buy it a porsche.', 'adorableGoat.jpg'),
    new Guardian('Dustin', 'Seattle, WA', 'dustin@mycountertops.com', 'I will ride a goat to the gym.', 'adorableGoat.jpg'),
    new Guardian('Matthew', 'Seattle, WA', 'lions@areawesome.com', 'I will do parkour with them.', 'adorableGoat.jpg'),
    new Guardian('Ben', 'Lynnwood, WA', 'DnD5e@rules.com', 'I will raise your goat as a Bard.', 'adorableGoat.jpg'),
    new Guardian('Duncan', 'Seattle, WA', 'Duncan@donuts.lamejoke.com', 'I teach goats how to hack.', 'adorableGoat.jpg'),
  ];

  for (var i = 0; i < defaultGuardians.length; i++){
    guardians.push(defaultGuardians[i]);
  }

  try {
    // localStorage.guardians = JSON.stringify(guardians);
    guardians = JSON.parse(localStorage.guardians);
  } catch (error){
    console.log('something went wrong!', error);
  }
}

postDefaultGuardians();






function guardianField() {
  var guardiansList = document.getElementById('guardians-list');
  var guardianWrap;
  var infoWrap;
  var guardianDisplay;
  var infoField;
  for(var i=0; i <guardians.length; i++) {
    guardianWrap = document.createElement('div');
    guardianWrap.setAttribute('class', 'guardian-wrap');

    infoWrap = document.createElement('div');
    infoWrap.setAttribute('class', 'info-wrap');

    guardianDisplay = document.createElement('img');
    if (guardians[i].guardianImage == ''){
      guardianDisplay.src = 'img/goat-shadow.png';
      guardiansList.appendChild(guardianWrap);
      guardianWrap.appendChild(guardianDisplay);
    } else {
      guardianDisplay.src = guardians[i].guardianImage;
      guardiansList.appendChild(guardianWrap);
      guardianWrap.appendChild(guardianDisplay);
    }



    infoField = document.createElement('p');
    infoField.setAttribute('class', 'name');
    infoField.textContent = guardians[i].guardianName;
    infoWrap.appendChild(infoField);

    infoField = document.createElement('p');
    infoField.setAttribute('class', 'guardian-location');
    infoField.textContent = guardians[i].guardianLocation;
    infoWrap.appendChild(infoField);

    infoField = document.createElement('p');
    infoField.setAttribute('class', 'guardian-contact');
    infoField.textContent = guardians[i].guardianContact;
    infoWrap.appendChild(infoField);

    infoField = document.createElement('p');
    infoField.setAttribute('class', 'guardian-service');
    infoField.textContent = guardians[i].serviceOffered;
    infoWrap.appendChild(infoField);

    guardianWrap.appendChild(infoWrap);
  }
}

guardianField();
