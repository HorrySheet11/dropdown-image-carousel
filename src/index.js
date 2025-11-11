import "./style.css";
import {addContent} from "./addContent.js";

console.log("Script loaded successfully.");
addContent();
const dropdownButton = document.querySelector("#dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", () => {
    dropdownContent.classList.toggle("active");
});
