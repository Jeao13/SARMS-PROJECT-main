document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".elementor-widget-heading .elementor-heading-title, .elementor-widget-text-editor p, .elementor-button, .elementor-element[data-id='ac10a6b']"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // Removes when out of view
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((element) => {
    element.classList.add("hidden"); // Start hidden
    observer.observe(element);
  });
});

// For header -- typing animations

document.addEventListener("DOMContentLoaded", function () {
  const heading = document.querySelector(".elementor-heading-title");

  if (!heading) {
    console.error("Element with class 'elementor-heading-title' not found!");
    return; // Stop execution if element is not found
  }

  const text = heading.innerText;
  let index = 0;

  function typeText() {
    if (index < text.length) {
      heading.innerHTML =
        text.substring(0, index + 1) + "<span class='cursor'>|</span>";
      index++;
      setTimeout(typeText, 50); // Typing speed
    } else {
      setTimeout(eraseText, 1000); // Pause before erasing
    }
  }

  function eraseText() {
    if (index > 0) {
      heading.innerHTML =
        text.substring(0, index - 1) + "<span class='cursor'>|</span>";
      index--;
      setTimeout(eraseText, 30); // Erasing speed
    } else {
      setTimeout(typeText, 500); // Pause before retyping
    }
  }

  // Start the animation
  typeText();
});

// Scroll listener

document.addEventListener("DOMContentLoaded", function () {
  let aboveHeader = document.querySelector(".ast-above-header-wrap");
  let mainHeader = document.querySelector(".ast-main-header-wrap");
  let lastScrollTop = 0;

  // Ensure the discount bar is visible when the page loads
  aboveHeader.style.transform = "translateY(0)";
  mainHeader.style.top = aboveHeader.offsetHeight + "px";

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      aboveHeader.style.transform = "translateY(-100%)"; // Hide the discount bar
      mainHeader.style.top = "0";
    } else {
      aboveHeader.style.transform = "translateY(0)"; // Show the discount bar
      mainHeader.style.top = aboveHeader.offsetHeight + "px"; // Adjust header position
    }

    lastScrollTop = scrollTop;
  });
});
