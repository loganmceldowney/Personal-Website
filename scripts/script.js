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
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  section.classList.add("section--hidden");
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
