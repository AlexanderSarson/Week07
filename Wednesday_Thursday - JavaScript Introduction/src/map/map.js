function printListNames(array) {
  let listNames = array.map(name => (name = `<li>${name}</li>`));
  return `<ul>${listNames.join("")}</ul>`;
}

let names = ["David", "Bo", "Karsten", "Benjamin"];

const rootDiv = document.querySelector("#root");
rootDiv.innerHTML = printListNames(names);

const form = document.createElement("form");
const submitButton = document.createElement("button");
const inputField = document.createElement("input");
const removeFirst = document.createElement("button");
const removeLast = document.createElement("button");
submitButton.innerText = "Click to submit";
removeLast.innerText = "Remove last";
removeFirst.innerText = "Remove first";
form.appendChild(inputField);
form.appendChild(submitButton);
form.appendChild(removeFirst);
form.appendChild(removeLast);
document.body.appendChild(form);

const onSubmit = e => {
  e.preventDefault();
  names.push(inputField.value);
  rootDiv.innerHTML = printListNames(names);
};
const removeFirstName = e => {
  e.preventDefault();
  names.shift();
  rootDiv.innerHTML = printListNames(names);
};
const removeLastName = e => {
  e.preventDefault();
  names.pop();
  rootDiv.innerHTML = printListNames(names);
};
submitButton.addEventListener("click", onSubmit);
removeFirst.addEventListener("click", removeFirstName);
removeLast.addEventListener("click", removeLastName);
