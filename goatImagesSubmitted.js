'use strict';

var goats = [];

try {
  goats = JSON.parse(localStorage.goats);
} catch(error){
  console.log('problem getting info', error);
}
// Create objects for all 9 goats images after user press 'Submit' button

// var goats = [
//   new goats('goat_1', 'Goat_1.jpg'),
//   new goats('goat_2', 'Goat_2.jpg'),
//   new goats('goat_3', 'Goat_3.jpg'),
//   new goats('goat_4', 'Goat_4.jpg'),
//   new goats('goat_5', 'Goat_5.jpg'),
//   new goats('goat_6', 'Goat_6.jpg'),
//   new goats('goat_7', 'Goat_7.jpg'),
//   new goats('goat_8', 'Goat_8.jpg'),
//   new goats('goat_9', 'Goat_9.jpg')
// ];
//
// // constructor for the goatImages
// function goats(name, filename) {
//
//   this.name = name;
//   this.filename = 'img/goat_images/' + filename;
// }

// access <div>, create <ul> element in html, and append it to <div>
// var mouseoverImages = document.getElementById('mouseover_images');
// var imageUL = document.createElement('ul');
// mouseoverImages.appendChild(imageUL);
//
// // create a for loop to display all images in img folder onto the page
// var imageElement;
// var imageLI;
//
// for(var i=0; i<goats.length; i++) {
//   imageElement = document.createElement('img');
//   imageLI = document.createElement('li');
//   imageElement.src = goats[i].filename;
//   imageLI.appendChild(imageElement);
//   imageUL.appendChild(imageLI);
// }
