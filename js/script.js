document.addEventListener("DOMContentLoaded", () => {
  // Selecting elements from the DOM
  const nav = document.querySelector(".nav");
  const logo = document.querySelector(".logo");
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerBars = document.querySelectorAll(".burger-menu .bar");
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

  // Variable to store the original logo source
  const originalLogoSrc = logo.src;

  // Update the logo source and burger menu bars background color after scrolling
  let isScrollingUp = false;
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 0);

    // Set the scroll threshold for logo and menu bar change (adjust as needed)
    const scrollThreshold = 200;

    // Check the scroll position
    const scrolled = window.scrollY;

    // Determine scrolling direction
    isScrollingUp = scrolled < lastScrollTop;

    // Change the logo source after scrolling past the threshold
    if (scrolled > scrollThreshold) {
      logo.src = "./img/sitelogo.png"; // Adjust the path to your second logo
    } else {
      logo.src = originalLogoSrc; // Revert to the original logo
    }

    // Change the background color of burger menu bars after scrolling past the threshold
    burgerBars.forEach(bar => {
      if (scrolled > scrollThreshold) {
        bar.style.backgroundColor = "black"; // Change to the desired color
      } else {
        bar.style.backgroundColor = ""; // Revert to default on scrolling back to the top
      }
    });

    lastScrollTop = scrolled;
  });
});