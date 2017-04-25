'user strict';

var goats = [];

try {
  goats = JSON.parse(localStorage.goats);
} catch(error){
  console.log('problem getting info', error);
}

// access <div>, create <ul> element in html, and append it to <div>
var mouseoverImages = document.getElementById('mouseover_images');
var imageUL = document.createElement('ul');
mouseoverImages.appendChild(imageUL);
//
// // create a for loop to display all images in img folder onto the page
var imageElement;
var imageLI;

for(var i=0; i <goats.length; i++) {
  imageElement = document.createElement('img');
  imageLI = document.createElement('li');
  imageElement.src = goats[i].goatImage;
  imageLI.appendChild(imageElement);
  imageUL.appendChild(imageLI);
}
