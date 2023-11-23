///////////////////////////////////////////////////////////
// Page Navigation
document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("main-nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

///////////////////////////////////////////////////////////
// Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Reveal Sections
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  // Slide in ABOUT Section

  if (entry.target.classList.contains("section-about")) {
    const aboutImage = entry.target.children[0].children[0];
    const aboutTextBox = entry.target.children[0].children[1];
    aboutImage.classList.add("in-view");
    aboutTextBox.classList.add("in-view");
  }

  // Slide in CTA Section
  if (entry.target.classList.contains("section-cta")) {
    const ctaContainer = entry.target.children[0];
    console.log(ctaContainer);
    ctaContainer.classList.add("in-view");
    console.log(ctaContainer);
  }

  // Slide in Portfolio Section
  if (entry.target.classList.contains("section-portfolio")) {
    const portfolioHeading = entry.target.children[0].children[0];
    const portfolioSubHeading = entry.target.children[0].children[1];
    const portfolioCards = entry.target.children[0].children[2];
    portfolioHeading.classList.add("in-view");
    portfolioSubHeading.classList.add("in-view");
    portfolioCards.classList.add("in-view");
  }

  // Slide in Contact Section
  if (entry.target.classList.contains("section-contact")) {
    const contactTextBox = entry.target.children[0].children[0].children[0];
    const contactForm = entry.target.children[0].children[0].children[1];
    console.log(contactTextBox, contactForm);
    contactTextBox.classList.add("in-view");
    contactForm.classList.add("in-view");
  }
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});

allSections.forEach(function (section) {
  // section.classList.add("section--hidden");
  sectionObserver.observe(section);
});

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const linksEl = document.querySelectorAll(".main-nav-link");

console.log(linksEl);
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  if (headerEl.classList.contains("nav-open")) {
    linksEl.forEach((link) => {
      link.addEventListener("click", function () {
        headerEl.classList.remove("nav-open");
      });
    });
  }
});

///////////////////////////////////////////////////////////
// Set Current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Menu Fade Animation
const handleHover = function (e, opacity) {
  if (e.target.classList.contains("main-nav-link")) {
    const link = e.target;
    const siblings = link
      .closest(".main-nav")
      .querySelectorAll(".main-nav-link");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

const nav = document.querySelector(".main-nav");
nav.addEventListener("mouseover", handleHover.bind(0.2));
nav.addEventListener("mouseout", handleHover.bind(1));
