"use strict";
const buttonsDiv = document.getElementById("buttons-container");

buttonsDiv.addEventListener("click", function (event) {
  const currentBtn = document.getElementById("cur");
  const previousBtn = document.getElementById("prev");
  if (event.target === currentBtn) {
    alert("Current location: " + window.location.href);
  } else if (event.target === previousBtn) {
    window.history.length > 1 ? window.history.back() : alert("No data");
  } else{
    return;
  }
});
