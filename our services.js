console.log("Spice Garden Services Page Loaded ❤️");
console.log("JavaScript Connected - Services Page Working");
const serviceBoxes = document.querySelectorAll(".service-container .box");
serviceBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
        const serviceTitle = box.querySelector("h3");

        if (!serviceTitle) return;

        console.log("Selected Service:", serviceTitle.textContent.trim());
    });
});
const whyUsSection = document.querySelector(".why-us");

if (whyUsSection) {
    console.log("Why Choose Us Section Loaded");
}

const serviceButtons = document.querySelectorAll(".service-container .box button");

serviceButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.stopPropagation();

        const serviceBox = button.closest(".box");

        if (!serviceBox) return;

        const serviceTitle = serviceBox.querySelector("h3");

        if (serviceTitle) {
            alert("Thank you for your interest in " +
                serviceTitle.textContent.trim() + "!");
        }
    });
});

console.log("Services page interactions ready!");
