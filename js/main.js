// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#navigation");
const CShamburgerMenu = document.querySelector("#navigation .toggle");

CShamburgerMenu.addEventListener("click", function () {
  CShamburgerMenu.classList.toggle("active");
  CSnavbarMenu.classList.toggle("active");
  CSbody.classList.toggle("open");
  // run the function to check the aria-expanded value
  ariaExpanded();
});

// checks the value of aria expanded on the ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
  const csUL = document.querySelector("#expanded");
  const csExpanded = csUL.getAttribute("aria-expanded");

  if (csExpanded === "false") {
    csUL.setAttribute("aria-expanded", "true");
  } else {
    csUL.setAttribute("aria-expanded", "false");
  }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll
// animations with the navbar

document.addEventListener("scroll", (e) => {
  const scroll = document.documentElement.scrollTop;
  if (scroll >= 100) {
    document.querySelector("body").classList.add("scroll");
  } else {
    document.querySelector("body").classList.remove("scroll");
  }
});

// mobile nav toggle code
const dropDowns = Array.from(
  document.querySelectorAll("#navigation .dropdown")
);
for (const item of dropDowns) {
  const onClick = () => {
    item.classList.toggle("active");
  };
  item.addEventListener("click", onClick);
}

AOS.init({
  duration: 1000, // Animation duration (in milliseconds)
  once: true, // Whether animation happens only once
  easing: "ease", // default easing for AOS animations
});

const faqItems = Array.from(document.querySelectorAll(".faq-item"));

for (const item of faqItems) {
  const onClick = () => {
    // Deactivate all other items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle the clicked item
    item.classList.toggle("active");
  };

  item.addEventListener("click", onClick);
}
