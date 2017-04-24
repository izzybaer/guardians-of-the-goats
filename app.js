//

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


function goatImagesFunc(name, filename) {
  this.name = name;
  this.filename = 'img/goat_images/' + filename;
}

var imageUL = document.createElement('ul');
mouseover_images.appendChild(imageUL);

var imageElement;
for(var i=0; i<goatImages.length; i++) {

  imageElement = document.createElement('img');
  imageLI = document.createElement('li');
  imageElement.src = goatImages.src;
  imageLI.appendChild(imageElement);
  imageUL.appendChild(imageLI);

}
