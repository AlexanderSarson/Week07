const rootDiv = document.querySelector("#root");
const input = document.createElement("input");
const userBtn = document.createElement("button");
const getAllBtn = document.createElement("button");

userBtn.innerText = "Get User";
getAllBtn.innerText = "Get All";

document.body.appendChild(input);
document.body.appendChild(userBtn);
document.body.appendChild(getAllBtn);

function printListNames(array) {
  const listNames = array.map(person => {
    return `<li>${person.name} ${person.phone}</li>`;
  });
  return `<ul>${listNames.join("")}</ul>`;
}

const getPerson = e => {
  e.preventDefault();
  rootDiv.innerHTML = "";
  const p = document.createElement("p");
  rootDiv.appendChild(p);
  fetch(`https://jsonplaceholder.typicode.com/users/${input.value}`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      p.innerText = JSON.stringify(json, undefined, 2);
    });
};

const getPeople = e => {
  e.preventDefault();
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      rootDiv.innerHTML = printListNames(json);
    });
};

getAllBtn.addEventListener("click", getPeople);
userBtn.addEventListener("click", getPerson);
