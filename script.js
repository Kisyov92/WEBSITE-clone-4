"use strict";

// faq accordion

const questionEls = document.querySelectorAll(".question");

questionEls.forEach((question) =>
  question.addEventListener("click", function (e) {
    const ansContainer = e.target.closest(".qa").querySelector(".answer");
    if (ansContainer.style.maxHeight) {
      ansContainer.style.maxHeight = null;
      ansContainer.classList.remove("question-answerd");
    } else {
      ansContainer.style.maxHeight = ansContainer.scrollHeight + "px";
      ansContainer.classList.add("question-answerd");
    }
  })
);

// features links

const featureLink = document.querySelectorAll(".feature-link");

featureLink.forEach((link) =>
  link.addEventListener("mouseover", function (e) {
    link.querySelector(".link-arrow").classList.add("dist");
  })
);
featureLink.forEach((link) =>
  link.addEventListener("mouseout", function (e) {
    link.querySelector(".link-arrow").classList.remove("dist");
  })
);

// smooth scroll

const navMain = document.querySelector(".nav-bar");
const footerLinks = document.querySelector(".footer-links");

function smoothScrollNav(element, linkClass) {
  element.addEventListener("click", function (e) {
    console.log(e.target);
    if (!e.target.classList.contains(linkClass)) return;
    e.preventDefault();
    const clickedLinkEl = e.target.closest(`.${linkClass}`);
    const sectionID = clickedLinkEl.getAttribute("href");
    const sectionEl = document.querySelector(sectionID);
    sectionEl.style.scrollMargin = "12rem";
    sectionEl.scrollIntoView({ behavior: "smooth" });
  });
}

smoothScrollNav(navMain, "nav-bar--link");
smoothScrollNav(footerLinks, "footer-link");
