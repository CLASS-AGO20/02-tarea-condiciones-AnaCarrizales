import App from "../src/main";

test("estaEnRango() se espera true", () => {
  let myApp = new App();
  
  let limiteInicial = Math.trunc(Math.random() * 500);
  let limiteFinal = Math.trunc(Math.random() * 500) + limiteInicial +2;
  let numero = Math.trunc(Math.random() * (limiteFinal-limiteInicial-2)) + limiteInicial + 1;
    
  expect(myApp.estaEnRango(limiteInicial, limiteFinal, numero)).toBe(true);
});

test("estaEnRango() se espera false", () => {
  let myApp = new App();
  
  let limiteInicial = Math.trunc(Math.random() * 500);
  let limiteFinal = Math.trunc(Math.random() * 500) + limiteInicial +2;
  let numero1 = Math.trunc(Math.random() * 10) - (limiteInicial + 1);
  let numero2 = Math.trunc(Math.random() * 10) + (limiteFinal + 1);
    
  expect(myApp.estaEnRango(limiteInicial, limiteFinal, numero1)).toBe(false);
  expect(myApp.estaEnRango(limiteInicial, limiteFinal, numero2)).toBe(false);
  expect(myApp.estaEnRango(limiteInicial, limiteFinal, limiteInicial)).toBe(false);
  expect(myApp.estaEnRango(limiteInicial, limiteFinal, limiteFinal)).toBe(false);
});


