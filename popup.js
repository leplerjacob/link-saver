import UI from "./UI.js";

document.getElementById("add").addEventListener("click", (event) => {
  event.preventDefault();
  event.target.classList.add("submit")
  event.target.innerText = "Submit"
  // Listen for user to click "Add" button
  UI.addInputBoxes();
});

UI.getItems();
