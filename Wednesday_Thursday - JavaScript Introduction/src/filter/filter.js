const rootDiv = document.querySelector("#root");
const inputField = document.createElement("input");
const table = document.createElement("table");
const button = document.createElement("button");
var cars = [
  { id: 1, year: 1997, make: "Ford", model: "E350", price: 3000 },
  { id: 2, year: 1999, make: "Chevy", model: "Venture", price: 4900 },
  { id: 3, year: 2000, make: "Chevy", model: "Venture", price: 5000 },
  { id: 4, year: 1996, make: "Jeep", model: "Grand Cherokee", price: 4799 },
  { id: 5, year: 2005, make: "Volvo", model: "V70", price: 44799 }
];

const carsToTableTag = ({ id, year, make, model, price }) => {
  return `<tr> <td>${id}</td> <td>${year}</td> <td>${make}</td> <td>${model}</td> <td>${price}</td> </tr>`;
};

const carsToTable = array => {
  const carsTable = array.map(car => carsToTableTag(car));
  return `<tr> <td>id</td> <td>year</td> <td>make</td> <td>model</td> <td>price</td> </tr> ${carsTable.join(
    ""
  )}`;
};

const createTableWithButtons = cars => {
  button.innerText = "Price less than";
  table.innerHTML = carsToTable(cars);
  table.appendChild(inputField);
  table.appendChild(button);
  rootDiv.appendChild(table);
  button.addEventListener("click", filterCars);
};
const filterCars = e => {
  e.preventDefault();
  const lessThanPrice = inputField.value;
  const filteredCars = cars.filter(car => car.price <= lessThanPrice);
  createTableWithButtons(filteredCars);
};
createTableWithButtons(cars);
