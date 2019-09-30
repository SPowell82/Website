
let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

// Clear all Images
function reset(){
  for(let i = 0; i<sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
  }
}

// Initialises the slider
function startSlide(){
  reset();
  sliderImages[0].style.display = 'block'; // Accessing the first image (like an array)
}

// Show previous (slide left) image (current image - 1 )
function slideLeft(){
  reset();
  sliderImages[current-1].style.display = 'block';
  current--;
}

// Show next (right click)
function slideRight(){
  reset();
  sliderImages[current+1].style.display = 'block';
  current++;
}
// Left arrow click (event listener listens for a click event)
// Once clicked, it will call the function
arrowLeft.addEventListener('click', function(){
  if(current === 0){ // Set the slider equal to the total number of images so it goes to the last image
    current = sliderImages.length;
  }
  slideLeft();
});
// Right click
arrowRight.addEventListener('click', function(){
  if(current === sliderImages.length-1){ // When at the last image, go back to the first one
    current = -1;
  }
  slideRight();
});

startSlide();
