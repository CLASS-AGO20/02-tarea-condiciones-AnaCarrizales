import App from "../src/main";

test("calcularSalario() Trabajador tipo 1", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let horas = Math.trunc(Math.random() * 500);
    expect(myApp.calcularSalario(1, horas)).toBe(horas * 20);
  }
});

test("calcularSalario() Trabajador tipo 2", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let horas = Math.trunc(Math.random() * 500);
    expect(myApp.calcularSalario(2, horas)).toBe(horas * 22);
  }
});

test("calcularSalario() Trabajador tipo 3", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let horas = Math.trunc(Math.random() * 500);
    expect(myApp.calcularSalario(3, horas)).toBe(horas * 25);
  }
});

test("calcularSalario() Trabajador tipo no válido", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let tipo = Math.trunc(Math.random() * 500) + 4;
    expect(myApp.calcularSalario(tipo, 10)).toBe(-1);
  }
});
