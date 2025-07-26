
   const name = document.getElementById("name").value.trim();
   const email = document.getElementById("email").value.trim();
   const message = document.getElementById("message").value.trim();
   const formMsg = document.getElementById("formMsg");

  if (name && email && message) {
    formMsg.style.color = "green";
    formMsg.textContent = "Thank you! Pandit Ji will contact you soon.";
     this.reset();
   } else {

     formMsg.style.color = "red";
    //  formMsg.textContent = "Please fill out all fields.";
   
 };

// slider

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  showSlide(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
});

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

setInterval(autoSlide, 4000);
