console.log("Spice Garden Loaded Successfully ❤️");
document.addEventListener("DOMContentLoaded", () => {
  const orderBtns = document.querySelectorAll("button");
  orderBtns.forEach(btn => {
    if(btn.innerText.includes("Order") || btn.innerText.includes("Explore")){
      btn.addEventListener("click", () => {
        alert("Your order feature is coming soon! 🍛");
      });
    }
  });
  const year = new Date().getFullYear();
  const footer = document.querySelector("footer");
  if(footer){
    footer.innerHTML = `@${year} Spice Garden | Made with ❤️`;
  }
  console.log("JS Connected - All features working");
});