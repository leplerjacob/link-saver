import Store from "./Store.js";

export default class UI {
  static async getItems() {
    const items = await Store.getItems();
    UI.addItemToList(items);
  }

  static addItemToList(items) {
    const clipboard = document.querySelector("tbody");
    const tr = document.createElement("tr");

    // Table key
    let dataKey = document.createElement("input");
    dataKey.classList.add("input-key");
    dataKey.readOnly = true;

    // Table value
    let dataValue = document.createElement("input");
    dataValue.classList.add("input-value");
    dataValue.readOnly = true;

    // Table value event listener
    dataValue.addEventListener("click", (e) => {
      navigator.clipboard.writeText(e.target.value).then(() => {
        UI.copiedAlert();
      });
    });

    for (const item in items) {
      let cloneKey = dataKey.cloneNode();
      cloneKey.value = item;
      let cloneValue = dataValue.cloneNode();
      cloneValue.value = items[item];
      tr.append(cloneKey, cloneValue);
      clipboard.append(tr);
    }
  }

  static addInputBoxes(key = "", value = "") {
    if (document.querySelector(".edit")) {
      return;
    }
    const clipboard = document.querySelector("tbody");
    const tr = document.createElement("tr");
    const inputKey = document.createElement("input");
    inputKey.classList.add("input-key", "edit");

    let inputValue = document.createElement("input");
    inputValue.classList.add("input-value", "edit");

    if (key && value) {
      Store.postItem(key, value);
    }

    inputValue.addEventListener("keyup", async (e) => {
      if (inputValue.Value != "" && e.code == "Enter") {
        Store.postItem(inputKey.value, inputValue.value);
        UI.clearItems();
        UI.getItems();
      }
    });

    tr.append(inputKey, inputValue);
    clipboard.append(tr);
  }

  static clearItems() {
    const clipboard = document.querySelector("tbody");
    clipboard.innerHTML = "";
  }

  static copiedAlert() {
    let notify = document.querySelector(".notify");
    notify.classList.remove("hide");
    notify.classList.add("show");

    timer = setTimeout(() => {
      notify.classList.remove("show");
      notify.classList.add("hide");
    }, 2000);
  }
}
