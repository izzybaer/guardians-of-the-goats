'use strict';

// grab goat form from html and assigning it to var goatForm
// add event listener
var goatForm = document.getElementById('goat-form');
goatForm.addEventListener('submit', handleGoatFormSubmit);





function handleGoatFormSubmit(event) {
  event.preventDefault();
  var goatForm = event.target;

  // grab input data and assign to variables
  var nameOfGoat = goatForm.nameOfGoat.value;
  var ageOfGoat = goatForm.ageOfGoat.value;
  var locationOfGoat = goatForm.locationOfGoat.value;
  var contactOfGoat = goatForm.contactOfGoat.value;
  var serviceNeeded = goatForm.contactOfGoat.value;


}
