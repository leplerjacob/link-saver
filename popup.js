/* Get storage items
 */
chrome.storage.sync.get(null, function (result) {
  // console.log('Value currently is ' + result.key)
  addStorageItemsToList(result);
});

let clipboard = document.querySelector("tbody");
let addBtn = document.getElementById("add");
let convertable = document.createElement("li");
let input = document.createElement("input");
let input2 = document.createElement("input");
let notify = document.querySelector(".notify");
addBtn.addEventListener("click", addDetailsInput);

function insertClip() {}

function addDetailsInput() {
  // Allows only one input box to show
  if (clipboard.querySelector("input.edit")) {
    return;
  } else {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input class="input-key edit"/></td><td><input class="input-value edit"/></td>
    `;
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
  inputKey.class = "input-key";
  inputKey.disabled;
  inputKey.value = key;

  let inputValue = document.createElement("input");
  inputValue.addEventListener("click", (e) => {
    console.log(e.target.value);
    navigator.clipboard.writeText(e.target.value).then(() => {
      copiedAlert();
    });
  });
  inputValue.disabled;
  inputValue.class = "input-value";
  inputValue.value = value;

  tr.append(inputKey, inputValue);
  return tr;
}

function copiedAlert() {
  notify.classList.remove("hide");
  notify.classList.add("show");

  setTimeout(() => {
    notify.classList.remove("show");
    notify.classList.add("hide");
  }, 5000);
}
