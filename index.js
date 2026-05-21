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


// SIMPLE FADE-IN ANIMATION

const cards = document.querySelectorAll(
    ".glass"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.1
});

cards.forEach((card)=>{

    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease";

    observer.observe(card);

});
