const buttons = document.querySelector("#buttons");
const display = document.querySelector("#display");
const calculate = document.querySelector("#calculate");
let operands = [];
let history = [];
const doMath = (n1, operator, n2) => {
  switch (operator) {
    case "/":
      return n1 / n2;
    case "*":
      return n1 * n2;
    case "-":
      return n1 - n2;
    case "+":
      return n1 + n2;

    default:
      alert("Shit, something went wrong");
  }
};

const isOperator = operator => {
  return operator === "/" ||
    operator === "*" ||
    operator === "-" ||
    operator === "+"
    ? true
    : false;
};

const showOperands = e => {
  if (isOperator(e.target.innerText)) {
    if (
      operands.length === 0 ||
      (operands.length > 0 && isOperator(operands[operands.length - 1]))
    ) {
      alert(
        "Not possible to have two operators in a row or start with an operator"
      );
    } else {
      operands.push(e.target.innerText);
    }
  } else {
    if (operands.length > 0 && !isOperator(operands[operands.length - 1])) {
      operands[operands.length - 1] += e.target.innerText;
    } else {
      operands.push(e.target.innerText);
    }
  }
  console.log(`print array:  ${operands}`);
  display.innerText = operands.join("");
};

const showResult = result => {
  display.innerText = result;
  history.push(`${operands.join("")} = ${result}`);
  console.log(`history: ${history}`);
  operands = [];
};

buttons.addEventListener("click", showOperands);

const parseToMath = (n1, operator, n2) => {
  return doMath(Number(n1), operator, Number(n2));
};

const calculateNumbersLogic = e => {
  e.stopPropagation();
  let sum = 0;
  if (operands.length > 2 && !isOperator(operands[operands.length - 1])) {
    for (let i = 2; i < operands.length; i += 2) {
      if (i === 2) {
        sum = parseToMath(operands[i - 2], operands[i - 1], operands[i]);
      } else {
        sum = parseToMath(sum, operands[i - 1], operands[i]);
      }
    }
    showResult(sum);
  } else {
    alert("Not possble to end with an operator");
  }
};

calculate.addEventListener("click", calculateNumbersLogic);
