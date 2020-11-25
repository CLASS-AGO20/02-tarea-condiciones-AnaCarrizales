import App from "../src/main";

test("calcular() Operador suma: +", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let numero1 = Math.trunc(Math.random() * 500);
    let numero2 = Math.trunc(Math.random() * 500);
    expect(myApp.calcular(numero1, numero2, '+')).toBe(numero1+numero2);
  }
});

test("calcular() Operador resta: -", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let numero1 = Math.trunc(Math.random() * 500);
    let numero2 = Math.trunc(Math.random() * 500);
    expect(myApp.calcular(numero1, numero2, '-')).toBe(numero1-numero2);
  }
});

test("calcular() Operador multiplicación: *", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let numero1 = Math.trunc(Math.random() * 500);
    let numero2 = Math.trunc(Math.random() * 500);
    expect(myApp.calcular(numero1, numero2, '*')).toBe(numero1*numero2);
  }
});

test("calcular() Operador división: /", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let numero1 = Math.trunc(Math.random() * 500);
    let numero2 = Math.trunc(Math.random() * 500);
    expect(myApp.calcular(numero1, numero2, '/')).toBe(numero1/numero2);
  }
});

test("calcular() Operador residuo: %", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let numero1 = Math.trunc(Math.random() * 500);
    let numero2 = Math.trunc(Math.random() * 500);
    expect(myApp.calcular(numero1, numero2, '%')).toBe(numero1%numero2);
  }
});

test("calcular() Operador no valido", () => {
  let myApp = new App();

  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;

  for ( let i = 0; i < 20; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  for (let i = 0; i < 20; i++) {
    let numero1 = Math.random() * 500;
    let numero2 = Math.random() * 500;
    expect(myApp.calcular(numero1, numero2, result[i])).toBe(-1);
  }
});





