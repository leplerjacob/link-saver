class LinkSaver {
  constructor() {
    this.body = document.querySelector("tbody");
    this.addButton = document.getElementById("add");
    this.tableRow = document.createElement("tr");
    this.inputKey = document.createElement("input");
    this.inputValue = document.createElement("input");

    this.getBody;
    this.addDetailsInput;
  }

  getBody = () => {
    return this.body;
  };

  addDetailsInput = () => {
    if (this.body.querySelector(".edit")) {
      return;
    }
    this.inputKey.classList.add("input-key", "edit");
    this.inputValue.classList.add("input-value", "edit");

    inputValue.addEventListener("keyup" /*create function*/);

    tr.append(inputKey, inputValue);
    this.body.append(tr);
  };

  inputListener = ({code}) => {
    if (this.inputValue != "" && code == "Enter"){
        
    }
  }
}

export default new LinkSaver();
