let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const dots = document.querySelectorAll('.dot');

function showSlide(index){
    images.forEach((img, i) => img.style.display = (i === index) ? 'block' : 'none');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

function changeImage(direction){
    currentIndex = (currentIndex + direction + images.length) % images.length;
    showSlide(currentIndex);
}

function currentSlide(index){
    currentIndex = index - 1;
    showSlide(currentIndex);
}

showSlide(currentIndex);