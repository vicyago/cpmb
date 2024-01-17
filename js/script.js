document.addEventListener("DOMContentLoaded", () => {
  // Selecting elements from the DOM
  const nav = document.querySelector(".nav");
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuItems = document.querySelectorAll(".mobile-menu a");

  // Adding a click event listener to the burger menu icon
  burgerMenu.addEventListener("click", toggleMenu);

  // Function to toggle the "open" class on the mobile menu
  function toggleMenu() {
    mobileMenu.classList.toggle("open");
  }

  // Adding click event listeners to each mobile menu item
  mobileMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Closing the mobile menu when a menu item is clicked
      mobileMenu.classList.remove("open");
    });
  });

  // Adding a click event listener to the document
  document.addEventListener("click", (event) => {
    // Closing the mobile menu if the click is outside the menu and burger menu icon
    if (
      !mobileMenu.contains(event.target) &&
      !burgerMenu.contains(event.target)
    ) {
      mobileMenu.classList.remove("open");
    }
  });

  // Additional code you want to run after DOMContentLoaded
  // You can add any other JavaScript code that should run after the page has loaded here
});
