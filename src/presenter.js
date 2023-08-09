import {sumar, multiplicar} from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
//const form = document.querySelector("#sumar-form");
const adicion= document.querySelector("#sumar-button");
const producto= document.querySelector("#multiplicar-button");
const div = document.querySelector("#resultado-div");
//evento para sumar
adicion.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p> El resultado de la suma de "+firstNumber+" y "+ secondNumber+ " es: "+ sumar(firstNumber, secondNumber) + "</p>";
});
//evento para multiplicar
producto.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p> El resultado de la multiplicación de "+firstNumber+" y "+ secondNumber+ " es: "+ multiplicar(firstNumber, secondNumber) + "</p>";
});
