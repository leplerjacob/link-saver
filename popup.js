/* Get storage items
 */
chrome.storage.sync.get(null, function (result) {
  // console.log('Value currently is ' + result.key)
  addStorageItemsToList(result);
});

clipboard = document.querySelector("tbody");
addBtn = document.getElementById("add");
convertable = document.createElement("li");
input = document.createElement("input");
input2 = document.createElement("input");

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
  // navigator.clipboard.readText().then(text => {
  //     console.log("text: ", text)
  // })
  let tr = document.createElement("tr");
  const item = `
        <td><input class="input-key" value="${key}" disabled/></td><td><input class="input-key" value="${value}" disabled/></td>
    `;
  tr.innerHTML = item;
  return tr;
}

function clipIt(event) {}
