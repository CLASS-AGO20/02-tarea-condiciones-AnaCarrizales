import App from "../src/main";

test("costoBoletos() Zona 1 menor que 2000", () => {
  let myApp = new App();
  let boletos = Math.trunc(Math.random() * 6);
  expect(myApp.costoBoletos(boletos, 1)).toBe(boletos*300);
});

test("costoBoletos() Zona 1 mayor que 2000", () => {
  let myApp = new App();
  let boletos = Math.trunc(Math.random() * 6) + 7;
  expect(myApp.costoBoletos(boletos, 1)).toBe(boletos*300 - (boletos*300*0.07));
});

test("costoBoletos() Zona 2 menor que 2000", () => {
  let myApp = new App();
  let boletos = Math.trunc(Math.random() * 4);
  expect(myApp.costoBoletos(boletos, 2)).toBe(boletos*450);
});

test("costoBoletos() Zona 2 mayor que 2000", () => {
  let myApp = new App();
  let boletos = Math.trunc(Math.random() * 4) + 5;
  expect(myApp.costoBoletos(boletos, 2)).toBe(boletos*450 - (boletos*450*0.07));
});

test("costoBoletos() Zona 3 menor que 2000", () => {
  let myApp = new App();
  let boletos = Math.trunc(Math.random() * 2);
  expect(myApp.costoBoletos(boletos, 3)).toBe(boletos*700);
});

test("costoBoletos() Zona 3 mayor que 2000", () => {
  let myApp = new App();
  let boletos = Math.trunc(Math.random() * 2) + 3;
  expect(myApp.costoBoletos(boletos, 3)).toBe(boletos*700 - (boletos*700*0.07));
});

test("costoBoletos() Zona no válida", () => {
  let myApp = new App();
  let zona = Math.trunc(Math.random() * 10) + 4;
  expect(myApp.costoBoletos(3, zona)).toBe(-1);
});