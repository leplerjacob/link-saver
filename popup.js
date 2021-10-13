/*  */
// let key = "type"
// let value = "What you want to save"
// let obj = {}
// obj[key] = value
// chrome.storage.sync.set(obj), function(){
//     console.log('Value is set to ' + value)
// }

/* Get storage items
 */
chrome.storage.sync.get(null, function (result) {
  // console.log('Value currently is ' + result.key)
  addStorageItemsToList(result);
});

/* When content loaded get
 */

clipboard = document.querySelector("tbody");
addBtn = document.getElementById("add");
convertable = document.createElement("li");
input = document.createElement("input");
input2 = document.createElement("input");

addBtn.addEventListener("click", addDetailsInput);

function insertClip() {}

function addDetailsInput() {
  convertable.append(input, input2);
  clipboard.append(convertable);
}

function addStorageItemsToList(items) {
  for (const item in items) {
    clipboard.append(listItem(item, items[item]));
  }
}

function listItem(key, value) {
    navigator.clipboard.readText().then(text => {
        console.log("text: ", text)
    })
  let tr = document.createElement("tr");
  const item = `
        <td>${key}</td><td>${value}</td>
    `;
  tr.innerHTML = item;
  return tr;
}

function clipIt(event) {
    
}
