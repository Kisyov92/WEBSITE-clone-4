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
