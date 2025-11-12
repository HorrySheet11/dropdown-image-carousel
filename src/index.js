import "./style.css";
import { addContent } from "./addContent.js";

console.log("Script loaded successfully.");
addContent();
const dropdownButton = document.querySelector("#dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", () => {
	dropdownContent.classList.toggle("active");
});

document.querySelector(".prev").addEventListener("click", () => {
	plusSlides(-1);
});
document.querySelector(".next").addEventListener("click", () => {
	plusSlides(1);
});



function plusSlides(n) {
	slideIndex += n;
	showSlides(slideIndex);
}

function showSlides(n) {
	let i;
	const slides = document.querySelectorAll(".image-div");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
	setTimeout(() => plusSlides(1), 5000);
}

let slideIndex = 1;
showSlides(slideIndex);