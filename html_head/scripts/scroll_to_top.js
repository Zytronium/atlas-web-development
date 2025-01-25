const backToTopButton = document.getElementById("back-to-top");
let isVisible = false;

// Show button after scrolling down 750 px
window.addEventListener("scroll", () => {
  if (window.scrollY > 750 && !isVisible) {
    isVisible = true;
    backToTopButton.style.display = "block";
    backToTopButton.style.animation = "flyIn 0.5s forwards";
  } else if (window.scrollY <= 750 && isVisible) {
    isVisible = false;
    backToTopButton.style.animation = "flyOut 0.5s forwards";
    // Wait for the animation to finish before hiding the button
    setTimeout(() => {
      if (!isVisible) backToTopButton.style.display = "none";
    }, 500);
  }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
