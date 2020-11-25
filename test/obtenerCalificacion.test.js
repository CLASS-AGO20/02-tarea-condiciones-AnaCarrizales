import App from "../src/main";

test("obtenerCalificacion() retorno calificación C", () => {
  let myApp = new App();

  for (let i = 0; i < 6; i++) {
    expect(myApp.obtenerCalificacion(i).toLowerCase()).toBe("c");
  }
});

test("obtenerCalificacion() retorno calificación B", () => {
  let myApp = new App();

  expect(myApp.obtenerCalificacion(6).toLowerCase()).toBe("b");
  expect(myApp.obtenerCalificacion(7).toLowerCase()).toBe("b");
});

test("obtenerCalificacion() retorno calificación A", () => {
  let myApp = new App();

  expect(myApp.obtenerCalificacion(8).toLowerCase()).toBe("a");
  expect(myApp.obtenerCalificacion(9).toLowerCase()).toBe("a");
});

test("obtenerCalificacion() retorno calificación A", () => {
  let myApp = new App();

  expect(myApp.obtenerCalificacion(10).toLowerCase()).toBe("a+");
});

test("obtenerCalificacion() retorno calificación ERROR, mayores que 10", () => {
  let myApp = new App();

  for (let i = 0; i < 6; i++) {
    expect(myApp.obtenerCalificacion(i + 111).toLowerCase()).toBe("error");
  }
});

test("obtenerCalificacion() retorno calificación ERROR, menores que cero", () => {
  let myApp = new App();

  for (let i = 0; i < 6; i++) {
    expect(myApp.obtenerCalificacion(i - 100).toLowerCase()).toBe("error");
  }
});
