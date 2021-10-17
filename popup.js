import UI from "./UI.js";

document.getElementById("add").addEventListener("click", (event) => {
  event.preventDefault();
  // Listen for user to click "Add" button
  UI.addInputBoxes();
});

UI.getItems();
