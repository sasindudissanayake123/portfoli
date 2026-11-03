let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

// CLOSE MENU AFTER CLICKING A LINK

let links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});

// SCROLL ANIMATION

let revealElements = document.querySelectorAll(".reveal");

let observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(function (element) {
    observer.observe(element);
});

// SKILLS ANIMATION

let skillsSection = document.querySelector(".skills-card");

let skillObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            let skillBars = document.querySelectorAll(".skill-progress");

            skillBars.forEach(function (bar) {
                bar.style.width = bar.getAttribute("data-width");
            });

            skillObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.3
});

skillObserver.observe(skillsSection);

// CONTACT FORM

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let subject = "Portfolio Contact Message";

    let body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Message: " + message;

    let mailLink =
        "mailto:sasindu.manethra@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    window.location.href = mailLink;

});
