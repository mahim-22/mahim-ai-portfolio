

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// =============================
// Close Menu After Click
// =============================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// =============================
// Navbar Background on Scroll
// =============================
window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("hide");
});

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

// =============================
// Active Navigation
// =============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =============================
// Fade Animation
// =============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// =============================
// Hero Image Animation
// =============================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    let direction = 1;

    setInterval(() => {

        heroImage.style.transform =
            `translateY(${direction * 10}px)`;

        direction *= -1;

    }, 1000);

}

// =============================
// Current Year in Footer
// =============================


const year = new Date().getFullYear();

const footer = document.querySelector("footer p:last-child");

if (footer) {

    footer.innerHTML = `© ${year} All Rights Reserved.`;

}
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_y17os1c",
            "template_6aoxf79",
            this
        )
        .then(function () {

            alert("Message Sent Successfully!");

            form.reset();

        })
        .catch(function(error) {

             console.error("EmailJS Error:", error);

             alert("Error: " + JSON.stringify(error));

    });

    });
}