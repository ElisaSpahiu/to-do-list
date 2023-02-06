var inputTxt = document.getElementById("inputTxt");
var submitBtn = document.getElementById("submit");
var list = document.getElementById("item-list");
var editInput = "";

function checkInput() {
  if (inputTxt.value === "" || inputTxt.value === null) {
    alert("Nuk mund te shtoni elemente te zbrazeta !!");
  } else if (submitBtn.innerText === "Add") {
    createElement();
  } else if (submitBtn.innerText === "Edit") {
    editElement(inputTxt);
  }
}

function createElement() {
  var element = document.createElement("li");
  var txt = document.createTextNode(inputTxt.value);
  inputTxt.value = "";

  var liParagraph = document.createElement("p");
  liParagraph.appendChild(txt);

  var elementDelButton = document.createElement("button");
  var elementDelButtonTxt = document.createTextNode("Delete");
  var elementEditButton = document.createElement("button");
  var elementEditButtonTxt = document.createTextNode("Edit");

  elementDelButton.appendChild(elementDelButtonTxt);
  elementEditButton.appendChild(elementEditButtonTxt);
  elementDelButton.className = "delBtn";
  elementEditButton.className = "editBtn";

  var btnContainer = document.createElement("div");
  btnContainer.appendChild(elementEditButton);
  btnContainer.appendChild(elementDelButton);
  element.appendChild(liParagraph);
  element.appendChild(btnContainer);

  list.appendChild(element);

  elementEditButton.onclick = () => {
    inputTxt.value = liParagraph.innerHTML;
    submitBtn.innerHTML = "Edit";
    editInput = liParagraph.innerHTML;
    inputTxt.focus();
  };
  submitBtn.innerHTML = "Add";

  elementDelButton.onclick = () => {
    if (confirm("A deshironi ta fshini kete element !")) {
      list.removeChild(element);
    }
  };
}

function editElement(txt) {
  let liElements = document.querySelectorAll("#item-list li p");
  liElements.forEach((e) => {
    if (e.innerHTML === editInput) {
      e.innerHTML = txt.value;
      editInput = txt.value;
    }
  });
  submitBtn.innerHTML = "Add";
  inputTxt.value = "";
}
