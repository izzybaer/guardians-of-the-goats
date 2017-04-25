
'use strict';

var goats = [];
var guardians = [];

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

function postDefaultGuardians(){
  var defaultGuardians = [
    new Guardian('Izzy', 'Seattle, WA', 'izzy@lovesdemgoats.com', 'I have never eaten a goat in my care, and never will.'),
    new Guardian('Evett', 'Seattle, WA', 'evett@hascoolshoes.com', 'I will drive a goat around in my new Porsche'),
    new Guardian('Dustin', 'Seattle, WA', 'dustin@mycountertops.com', 'I will ride a goat to the gym'),
    new Guardian('Matthew', 'Seattle, WA', 'lions@areawesome.com', 'I will dress goats up in sweaters and pet them for hours'),
    new Guardian('Ben', 'Lynnwood, WA', 'DnD5e@rules.com', 'I will raise your goat as a Bard'),
    new Guardian('Duncan', 'Seattle, WA', 'Duncan@donuts.hasntheardthatbefore.com', 'I teach goats how to hack'),
  ];

  for (var i = 0; i < defaultGuardians.length; i++){
    guardians.push(defaultGuardians[i]);
  }

  try {
    localStorage.guardians = JSON.stringify(guardians);
  } catch (error){
    console.log('something went wrong!', error);
  }
}

postDefaultGuardians();


function handleGoatFormSubmit(event) {
  event.preventDefault();
  var goatForm = event.target;

  // grab input data and assign to variables
  var nameOfGoat = goatForm.nameOfGoat.value;
  var ageOfGoat = goatForm.ageOfGoat.value;
  var locationOfGoat = goatForm.locationOfGoat.value;
  var contactOfGoat = goatForm.contactOfGoat.value;
  var serviceNeeded = goatForm.serviceNeeded.value;
  var goatImage = goatForm.goatImage.value;
  // storing the value of the input in an empty array of the constructor
  var addGoat = new Goat(nameOfGoat, ageOfGoat, locationOfGoat, contactOfGoat, serviceNeeded, goatImage);
  goats.push(addGoat);

  try {
    localStorage.goats = JSON.stringify(goats);
  } catch (error){
    console.log('something went wrong!', error);
  }

  goatForm.reset();
}

// handleGuardianFormSubmit invokes on form submit event
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

  try {
    localStorage.guardians = JSON.stringify(guardians);
  } catch (error){
    console.log('something went wrong!', error);
  }

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
