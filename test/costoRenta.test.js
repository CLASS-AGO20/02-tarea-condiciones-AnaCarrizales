import App from "../src/main";

test("costoRenta() martes y jueves", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let numero = Math.trunc(Math.random() * 500);

    if(numero % 2 === 0) {
      expect(myApp.costoRenta(numero, 2)).toBe( (Math.trunc(numero/2)) * 25);
      expect(myApp.costoRenta(numero, 4)).toBe( Math.trunc(numero/2) * 25);
    } else {
      expect(myApp.costoRenta(numero, 2)).toBe( (Math.trunc(numero/2) * 25) + 25);
      expect(myApp.costoRenta(numero, 4)).toBe( (Math.trunc(numero/2) * 25) + 25);
    }
  }
});

test("costoRenta() miércoles", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let numero = Math.trunc(Math.random() * 500);
    expect(myApp.costoRenta(numero, 3)).toBe( (numero * 25) - (numero*25*0.15));
  }
});


test("costoRenta() lunes y viernes", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let numero = Math.trunc(Math.random() * 500);

    if(numero % 3 === 0) {
      expect(myApp.costoRenta(numero, 1)).toBe( Math.trunc(numero/3) * 60);
      expect(myApp.costoRenta(numero, 5)).toBe( Math.trunc(numero/3) * 60);
    } else {
      expect(myApp.costoRenta(numero, 1)).toBe( (Math.trunc(numero/3) * 60) + ((numero%3)*25));
      expect(myApp.costoRenta(numero, 5)).toBe( (Math.trunc(numero/3) * 60) + ((numero%3)*25));
    }
  }
});

test("costoRenta() sábado y domingo", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let numero = Math.trunc(Math.random() * 500);
    
    expect(myApp.costoRenta(numero, 6)).toBe( numero * 25);
    expect(myApp.costoRenta(numero, 7)).toBe( numero * 25);
  }
});

test("costoRenta() día no válido", () => {
  let myApp = new App();

  for (let i = 0; i < 20; i++) {
    let numero = Math.trunc(Math.random() * 500);
    
    expect(myApp.costoRenta(numero, 8+numero)).toBe(-1);
  }
});