console.log("Spice Garden Menu Page Loaded ❤️");
console.log("JavaScript Connected - Menu Page Working");
const orderButtons = document.querySelectorAll(".menu-card button");
const orderForm = document.querySelector("#order-form");
const foodInput = document.querySelector("#food-name");
const customerInput = document.querySelector("#customer-name");
const quantityInput = document.querySelector("#quantity");
const orderStatus = document.querySelector("#order-status");
orderButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const menuCard = button.closest(".menu-card");

        if (!menuCard) return;

        const foodTitle = menuCard.querySelector("h3");

if (!foodTitle) return;

const foodName = foodTitle.textContent.trim();
        if (foodInput) {
            foodInput.value = foodName;
        }

        console.log("Selected Food:", foodName);

        if (orderForm) {
            orderForm.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        } else {
            alert(foodName + " selected!");
        }
    });
});
if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const foodName = foodInput.value.trim();
        const customerName = customerInput.value.trim();
        const quantity = Number(quantityInput.value);
        if (!foodName || !customerName || !quantityInput.value) {
            orderStatus.textContent = "Please fill in all fields.";
            orderStatus.style.color = "red";
            return;
        }

        if (!Number.isInteger(quantity) || quantity < 1) {
            orderStatus.textContent = "Please enter a valid quantity.";
            orderStatus.style.color = "red";
            return;
        }

        orderStatus.textContent =
            "Thank you, " + customerName +
            "! Your order for " + quantity +
            " " + foodName + " is ready for confirmation.";

        orderStatus.style.color = "green";

        console.log("Order Details:");
        console.log("Customer:", customerName);
        console.log("Food:", foodName);
        console.log("Quantity:", quantity);
        orderForm.reset();
    });
}
