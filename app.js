'use strict';

var goats = [];
var guardians = [];

// grab goat form from html and assigning it to var goatForm
// add event listener
var goatForm = document.getElementById('goat-form');
goatForm.addEventListener('submit', handleGoatFormSubmit);

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
function Guardian(author, authorLocation, authorContact, serviceOffered){
  this.author = author;
  this.authorLocation = authorLocation;
  this.authorContact = authorContact;
  this.serviceOffered = serviceOffered;
}

function handleGoatFormSubmit(event) {
  event.preventDefault();
  var goatForm = event.target;

  // grab input data and assign to variables
  var nameOfGoat = goatForm.nameOfGoat.value;
  var ageOfGoat = goatForm.ageOfGoat.value;
  var locationOfGoat = goatForm.locationOfGoat.value;
  var contactOfGoat = goatForm.contactOfGoat.value;
  var serviceNeeded = goatForm.serviceNeeded.value;

// storing the value of the input in an empty array of the constructor
  var addGoat = new Goat(nameOfGoat, ageOfGoat, locationOfGoat, contactOfGoat, serviceNeeded);
  goats.push(addGoat);

  goatForm.reset();
}


// var goatInNeed = document.getElementById('goat-in-need');
// var goatGuardian = document.getElementById('goat-guardian');

// goatInNeed.addEventListener('click', functionName);
// goatGuardian.addEventListener('click', secondFunctionName);

// function selectForm(event) {
//   if(goatInNeed.checked) {
//     console.log('show goat in need form', event);
//   } else if(goatGuardian.checked) {
//     console.log('show goat guardian form', event);
//   } else {
//     console.log('something went wrong');
//   }
