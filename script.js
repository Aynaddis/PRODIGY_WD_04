// Hamburger Menu Functionality
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Download CV Function
function downloadCV() {
    alert("Downloading CV...");
    // Add logic to download the CV file
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    alert("Your message has been sent!"); 
}

document.querySelector('form').addEventListener('submit', handleFormSubmit);