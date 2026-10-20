console.log("Spice Garden Contact Page Loaded ❤️");
console.log("JavaScript Connected - Contact Page Working");
const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#user-name");
const emailInput = document.querySelector("#user-email");
const messageInput = document.querySelector("#user-message");
const formStatus = document.querySelector("#form-status");
if (contactForm) {

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const userName = nameInput.value.trim();
        const userEmail = emailInput.value.trim();
        const userMessage = messageInput.value.trim();
        if (!userName || !userEmail || !userMessage) {
            formStatus.textContent = "Please fill in all fields.";
            formStatus.style.color = "red";
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(userEmail)) {
            formStatus.textContent =
                "Please enter a valid email address.";
            formStatus.style.color = "red";
            return;
        }
        formStatus.textContent =
            `Thank you, ${userName}! Your message is ready.`;

        formStatus.style.color = "green";
        console.log("Contact Form Details:");
        console.log("Name:", userName);
        console.log("Email:", userEmail);
        console.log("Message:", userMessage);
        contactForm.reset();

    });

}

console.log("Contact form validation ready!");
