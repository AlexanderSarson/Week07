//a
const outerDiv = document.querySelector("#outer");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");

//c
const p1 = document.createElement("p");
outerDiv.appendChild(p1);
const sayHey = e => {
  p1.innerText = `Hi from ${e.target.id}`;
};

div1.addEventListener("click", sayHey);
div2.addEventListener("click", sayHey);

//b

outerDiv.addEventListener("click", sayHey);
