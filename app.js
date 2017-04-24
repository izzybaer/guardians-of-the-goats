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
