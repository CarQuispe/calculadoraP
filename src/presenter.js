import sumar from "./sumador.js";
import restar from "./restador.js";
import multiplicar from "./multiplicador.js";
import dividir from "./divisor.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const operation = document.querySelector("#operacion"); // Un `select` para elegir la operación
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseFloat(first.value);
  const secondNumber = Number.parseFloat(second.value);
  const selectedOperation = operation.value;

  let result;
  try {
    switch (selectedOperation) {
      case "sumar":
        result = sumar(firstNumber, secondNumber);
        break;
      case "restar":
        result = restar(firstNumber, secondNumber);
        break;
            default:
        result = "Operación no válida";
    }
    div.innerHTML = `<p>Resultado: ${result}</p>`;
  } catch (error) {
    div.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});
