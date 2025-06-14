const projectsSection = document.getElementById("projects-section");

const projectTitle = projectsSection.querySelector(".projects");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        projectTitle.classList.add("visible");
      } else {
        projectTitle.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

observer.observe(projectsSection);

const aboutSection = document.getElementById("about-section");

const aboutTitle = aboutSection.querySelector(".about");

const observerAbout = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutTitle.classList.add("visible");
      } else {
        aboutTitle.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

observerAbout.observe(aboutSection);

const headerSection = document.getElementById("header-section");

const headerTitle = headerSection.querySelector(".name");

const observerHeader = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        headerTitle.classList.add("visible");
      } else {
        headerTitle.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

observerHeader.observe(headerSection);

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");
  const body = document.body;

  burger.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");

    // Блокировка скролла
    if (nav.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  });

  // Закрытие меню при клике на ссылку
  const navLinks = document.querySelectorAll(".header__nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      burger.classList.remove("active");
      nav.classList.remove("active");
      body.style.overflow = "";
    });
  });
});
