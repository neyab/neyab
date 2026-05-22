// index.js

// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "rgba(255,255,255,0.65)";
    }
    else{
        navbar.style.background = "rgba(255,255,255,0.45)";
    }

});


// SIMPLE SCROLL ANIMATION

const animatedItems = document.querySelectorAll(".glass, .hero-text, .section-title");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            entry.target.classList.remove("animate-hidden");
        }
    });
}, {
    threshold: 0.15,
});

animatedItems.forEach((item, index) => {
    item.classList.add("animate-hidden");
    item.style.transitionDelay = `${(index % 12) * 0.07}s`;
    observer.observe(item);
});
