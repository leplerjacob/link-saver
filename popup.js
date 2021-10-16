import {getItems} from './store.js'


let clipboard = document.querySelector("tbody");
let addBtn = document.getElementById("add");
let convertable = document.createElement("li");
let input = document.createElement("input");
let input2 = document.createElement("input");
let notify = document.querySelector(".notify");
addBtn.addEventListener("click", addDetailsInput);

addStorageItemsToList(await getItems())


function addDetailsInput() {
  // Allows only one input box to show
  if (clipboard.querySelector(".edit")) {
    return;
  } else {
    let tr = document.createElement("tr");
    let inputKey = document.createElement("input");
    inputKey.classList.add("input-key", "edit");
    let inputValue = document.createElement("input");
    inputValue.classList.add("input-value", "edit");
    inputValue.addEventListener("keyup", async (e) => {
      if (inputValue.value != "" && e.code == "Enter") {
        await chrome.storage.sync.set(
          { [`${inputKey.value}`]: inputValue.value },
          function (result) {
            // console.log('Value currently is ' + result.key)
            addStorageItemsToList(result);
          }
        );
        clipboard.innerHTML = "";
        await chrome.storage.sync.get(null, function (result) {
          // console.log('Value currently is ' + result.key)
          addStorageItemsToList(result);
        });
      }
    });

    tr.append(inputKey, inputValue);
    clipboard.append(tr);
  }
}

function addStorageItemsToList(items) {
  for (const item in items) {
    clipboard.append(listItem(item, items[item]));
  }
}

function listItem(key, value) {
  let tr = document.createElement("tr");
  let inputKey = document.createElement("input");
  inputKey.classList.add("input-key");
  inputKey.readOnly = true;
  inputKey.value = key;

  let inputValue = document.createElement("input");
  inputValue.addEventListener("click", (e) => {
    console.log(e.target.value);
    navigator.clipboard.writeText(e.target.value).then(() => {
      copiedAlert();
    });
  });
  inputKey.classList.add("input-value");
  inputValue.readOnly = true;
  inputValue.value = value;

  tr.append(inputKey, inputValue);
  return tr;
}

let timer;

function copiedAlert() {
  notify.classList.remove("hide");
  notify.classList.add("show");

  timer = setTimeout(() => {
    notify.classList.remove("show");
    notify.classList.add("hide");
  }, 2000);
}

class Storage {

}