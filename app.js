'use strict';


// contructor for Goat Guardian
function Guardian(author, authorLocation, authorContact, serviceOffered){
  this.author = author;
  this.authorLocation = authorLocation;
  this.authorContact = authorContact;
  this.serviceOffered = serviceOffered;
}

// constructor for Goat in need
function Goat(goatName, goatAge, goatLocation, serviceNeeded, contact, src) {
  this.goatName = goatName;
  this.goatAge = goatAge;
  this.goatLocation = goatLocation;
  this.serviceNeeded = serviceNeeded;
  this.contact = contact;
  this.goatImage = src;
}


var goatInNeed = document.getElementById('goat-in-need');
var goatGuardian = document.getElementById('goat-guardian');

goatInNeed.addEventListener('click', functionName);
goatGuardian.addEventListener('click', secondFunctionName);

function selectForm(event) {
  if(goatInNeed.checked) {
    console.log('show goat in need form', event);
  } else if(goatGuardian.checked) {
    console.log('show goat guardian form', event);
  } else {
    console.log('something went wrong');
  }
