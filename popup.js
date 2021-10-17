import UI from "./UI.js";

document.getElementById("add").addEventListener("click", (event) => {
  event.preventDefault();
  UI.addInputBoxes();
});

UI.getItems();
