'user strict';

var goats = [];

try {
  goats = JSON.parse(localStorage.goats);
} catch(error){
  console.log('problem getting info', error);
}

// displayGoatInformation creates necessary elements, populates them with information, and appends to html document
function displayGoatInformation() {
  var mouseOverImages = document.getElementById('mouseover_images');
  var div;
  var goatDisplay;
  var infoField;

  for(var i=0; i <goats.length; i++) {
    div = document.createElement('div');
    div.setAttribute('class', 'goat-wrap');
    goatDisplay = document.createElement('img');
    goatDisplay.src = goats[i].goatImage;
    mouseOverImages.appendChild(div);
    div.appendChild(goatDisplay);


    infoField = document.createElement('p');
    infoField.setAttribute('class', 'name');
    infoField.textContent = goats[i].goatName;
    div.appendChild(infoField);

    infoField = document.createElement('p');
    infoField.setAttribute('class', 'age');
    infoField.textContent = goats[i].goatAge;
    div.appendChild(infoField);

    infoField = document.createElement('p');
    infoField.setAttribute('class', 'location');
    infoField.textContent = goats[i].goatLocation;
    div.appendChild(infoField);

    infoField = document.createElement('p');
    infoField.setAttribute('class', 'service-needed');
    infoField.textContent = goats[i].serviceNeeded;
    div.appendChild(infoField);

    infoField = document.createElement('p');
    infoField.setAttribute('class', 'contact');
    infoField.textContent = goats[i].contact;
    div.appendChild(infoField);
  }
}

displayGoatInformation();
