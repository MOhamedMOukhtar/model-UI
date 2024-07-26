"use strict";

const modals = document.querySelectorAll(".modal");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");

//call back function for hidden model (expression)
const hiddenModal = function () {
  popup.style.display = "none";
  overlay.classList.add("hidden");
};

modals.forEach((modal) => {
  modal.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.classList.remove("hidden");
  });
});

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    hiddenModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hiddenModal();
  }
});

overlay.addEventListener("click", hiddenModal);
