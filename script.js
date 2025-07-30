let view = document.querySelector(".view");
let hiddenLinks = document.querySelector(".hidden-links");
let imgArrows = document.querySelector(".imgarrows");

view.addEventListener("click", (e) => {
  e.preventDefault();
  hiddenLinks.classList.toggle("show");

  if (imgArrows.src.includes("icon-arrow-down.svg")) {
    imgArrows.src = "./images/icon-arrow-up.svg";
  } else {
    imgArrows.src = "./images/icon-arrow-down.svg";
  }
});

let menuMobileBtn = document.querySelector(".menu-mobile-btn");
let ativarMenuLinks = document.querySelector(".links-mobile");
menuMobileBtn.addEventListener("click", () => {
  ativarMenuLinks.classList.toggle("flex-ativar");
});
