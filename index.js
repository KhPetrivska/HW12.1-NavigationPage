"use strict";
//debugger
const enterBtn = document.getElementById("enter-button");
const goBtn = document.getElementById("go-button");

let linkFromUser = null;

enterBtn.addEventListener("click", function () {
  linkFromUser = prompt("Enter the link you want to visit.");
});
goBtn.addEventListener("click", function () {
  isUrlValid(linkFromUser)
    ? (window.location.href = linkFromUser)
    : alert(
        "Please enter the valid URL you what to visit using another button."
      );
});

function isUrlValid(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}
