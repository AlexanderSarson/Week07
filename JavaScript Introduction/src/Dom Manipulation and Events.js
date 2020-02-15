// a)
function divBackgroundColor() {
  let nodes = document.getElementsByTagName("div");
  for (let node of nodes) {
    node.style.backgroundColor = "red";
  }
}
divBackgroundColor();

function divUniqueBackgroundColor() {
  document.getElementById("div1").style.backgroundColor = "blue";
  document.getElementById("div2").style.backgroundColor = "orange";
  document.getElementById("div3").style.backgroundColor = "yellow";
}

document
  .getElementById("button")
  .addEventListener("click", divUniqueBackgroundColor);
