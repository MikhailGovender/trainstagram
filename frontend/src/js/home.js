// JavaScript code for handling navigation and generating image list
document.addEventListener('DOMContentLoaded', function() {
  
    const imageList = document.getElementById('imageList');
    const images = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg',
      'image5.jpg',
      'image6.jpg',
      'image7.jpg',
      'image8.jpg',
      'image9.jpg',
      'image10.jpg',
      'image10.jpg',
      'image10.jpg',
      'image10.jpg',
      'image10.jpg',
      'image10.jpg',
      'image10.jpg',
      'image10.jpg',
      'image10.jpg',
      'image10.jpg',
      'image10.jpg',
      'image10.jpg',
      'image10.jpg',
      'image10.jpg'
      ]
  
    images.forEach(image => {
      const imageItem = document.createElement('img');
      imageItem.className = 'imageItem';
      imageItem.src = `url(${image})`;
      imageList.appendChild(imageItem);
    });
  });
  