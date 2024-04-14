

window.addEventListener('load', function() {
 const slideImages = document.querySelectorAll('.img-container img');
 const sliderFrame = document.querySelector('.slider-frame');
 let totalHeight = 0;

 slideImages.forEach(image => {
   totalHeight += image.clientHeight;
 });

 sliderFrame.style.height = totalHeight + 'px';
});
