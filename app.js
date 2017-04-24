
'use strict';

var goats = [];
var guardians = [];

var goatImages= [
  new goatImagesFunc('goat_1', 'Goat_1.jpg'),
  new goatImagesFunc('goat_2', 'Goat_2.jpg'),
  new goatImagesFunc('goat_3', 'Goat_3.jpg'),
  new goatImagesFunc('goat_4', 'Goat_4.jpg'),
  new goatImagesFunc('goat_5', 'Goat_5.jpg'),
  new goatImagesFunc('goat_6', 'Goat_6.jpg'),
  new goatImagesFunc('goat_7', 'Goat_7.jpg'),
  new goatImagesFunc('goat_8', 'Goat_8.jpg'),
  new goatImagesFunc('goat_9', 'Goat_9.jpg')
];


imageElement = document.createElement('img');
  imageLI = document.createElement('li');
  imageElement.src = goatImages.src;
  imageLI.appendChild(imageElement);
  imageUL.appendChild(imageLI);


function goatImagesFunc(name, filename) {
  this.name = name;
  this.filename = 'img/goat_images/' + filename;

// grab goat form from html and assigning it to var goatForm
// add event listener
var goatForm = document.getElementById('goat-form');
goatForm.addEventListener('submit', handleGoatFormSubmit);

//grab guardian form from html and assign its reference to guardianForm
//add submit event listener
var guardianForm = document.getElementById('goat-guardian-form');
guardianForm.addEventListener('submit', handleGuardianFormSubmit);

// constructor for Goat in need
function Goat(goatName, goatAge, goatLocation, serviceNeeded, contact, src) {
  this.goatName = goatName;
  this.goatAge = goatAge;
  this.goatLocation = goatLocation;
  this.serviceNeeded = serviceNeeded;
  this.contact = contact;
  this.goatImage = src;
}

// contructor for Goat Guardian
function Guardian(guardianName, guardianLocation, guardianContact, serviceOffered){
  this.guardianName = guardianName;
  this.guardianLocation = guardianLocation;
  this.guardianContact = guardianContact;
  this.serviceOffered = serviceOffered;

}

var imageUL = document.createElement('ul');
mouseover_images.appendChild(imageUL);

var imageElement;
for(var i=0; i<goatImages.length; i++) {

// storing the value of the input in an empty array of the constructor
  var addGoat = new Goat(nameOfGoat, ageOfGoat, locationOfGoat, contactOfGoat, serviceNeeded);
  goats.push(addGoat);
  goatForm.reset();
}

function handleGuardianFormSubmit(event) {
  event.preventDefault();
  var guardianForm = event.target;

  //grab input data and assign to variables
  var nameOfGuardian = guardianForm.nameOfGuardian.value;
  var locationOfGuardian = guardianForm.locationOfGuardian.value;
  var contactOfGuardian = guardianForm.contactOfGuardian.value;
  var serviceOffered = guardianForm.serviceOffered.value;

  // instantiate new Guardian using form values with Guardian constructor and push to guardians array
  var addGuardian = new Guardian(nameOfGuardian, locationOfGuardian, contactOfGuardian, serviceOffered);
  guardians.push(addGuardian);
  guardianForm.reset();
}


















var goatInNeedButton = document.getElementById('goat-in-need');
var goatGuardianButton = document.getElementById('goat-guardian');

goatInNeedButton.addEventListener('click', showForm);
goatGuardianButton.addEventListener('click', showForm);

function showForm(event) {
  if (goatGuardianButton === event.target) {
    guardianForm.style.display = 'block';
    goatForm.style.display = 'none';
    //gray out this button through css
    //ungray the other button
  } else if (goatInNeedButton === event.target) {
    goatForm.style.display = 'block';
    guardianForm.style.display = 'none';
    //gray out this button through css
    //ungray the other button
  }
}


// function selectForm(event) {
//   if(goatInNeed.checked) {
//     console.log('show goat in need form', event);
//   } else if(goatGuardian.checked) {
//     console.log('show goat guardian form', event);
//   } else {
//     console.log('something went wrong');
//   }
