import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("debería sumar un número positivo y un negativo", () => {
    expect(sumar(3, -2)).toEqual(1);
  });
  it("debería manejar ceros correctamente", () => {
    expect(sumar(0, 0)).toEqual(0);
    expect(sumar(5, 0)).toEqual(5);
  });
});


