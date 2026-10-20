console.log("About Spice Garden - Our Story Loaded ❤️");
console.log("JS Connected - About Page Working");
const footer = document.querySelector(".footer");

if (footer) {
    footer.innerHTML =
        `&copy; ${new Date().getFullYear()} Spice Garden | Made with ❤️`;
}
const aboutSections = document.querySelectorAll(
    ".about-content, .about-values"
);

function showVisibleSections() {
    aboutSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", showVisibleSections);
showVisibleSections();
const readMoreBtn = document.querySelector(".more-text");
const extraStory = document.querySelector("#extra-story");
if (readMoreBtn && extraStory) {
    readMoreBtn.addEventListener("click", () => {
        const isExpanded =
            readMoreBtn.getAttribute("aria-expanded") === "true";

        if (isExpanded) {
            extraStory.hidden = true;
            readMoreBtn.textContent = "Read More";
            readMoreBtn.setAttribute("aria-expanded", "false");
        } else {
            extraStory.hidden = false;
            readMoreBtn.textContent = "Read Less";
            readMoreBtn.setAttribute("aria-expanded", "true");
        }
    });
}
console.log("About page features ready!");
