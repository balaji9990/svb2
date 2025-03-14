function toggleMenu() {
    const navContainer = document.querySelector(".nav-container");
    const navbar = document.querySelector(".navbar");

    navContainer.classList.toggle("show");
    navbar.classList.toggle("hide-logo");
}

// Close menu when clicking any <li>
document.querySelectorAll(".nav-links li a").forEach(item => {
    item.addEventListener("click", () => {
        toggleMenu();
    });
});


//gallery slide
let slides = document.querySelectorAll('.slide');
let index = 0;

function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');

    // Restart the animation for the new active slide
    let img = slides[index].querySelector('img');
    img.style.animation = 'none';
    setTimeout(() => {
        img.style.animation = 'morphEffect 1.5s forwards';
    }, 10);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
