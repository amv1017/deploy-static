let rating = 2;
let maxRating = 5;

const gold = document.querySelector(".gold");
const gray = document.querySelector(".gray");
const rv = document.querySelector(".rating-value");
const fsv = document.querySelector(".fs-value");

gold.innerText = "★★★★★";
gray.innerText = "★★★★★";

let maxWidth = 0;

let starSize = 100;

const updateRating = () => {
  const width = (rating / maxRating) * maxWidth;
  rv.innerText = rating.toFixed(2);
  gold.style.width = `${width}px`;
};

const updateStarSize = () => {
  fsv.innerText = starSize;
  gold.style.fontSize = `${starSize}px`;
  gray.style.fontSize = `${starSize}px`;
};

updateStarSize();

document.addEventListener("DOMContentLoaded", () => {
  maxWidth = gray.getBoundingClientRect().width;
  updateRating();
});

const ratingStep = 0.1;

document.querySelector(".btn-add-rating").addEventListener("click", () => {
  rating += ratingStep;
  updateRating();
});

document.querySelector(".btn-rem-rating").addEventListener("click", () => {
  rating -= ratingStep;
  updateRating();
});

const fsStep = 5;

document.querySelector(".btn-add-fs").addEventListener("click", () => {
  starSize += fsStep;
  updateStarSize();
  maxWidth = gray.getBoundingClientRect().width;
  updateRating();
});

document.querySelector(".btn-rem-fs").addEventListener("click", () => {
  starSize -= fsStep;
  updateStarSize();
  maxWidth = gray.getBoundingClientRect().width;
  updateRating();
});
