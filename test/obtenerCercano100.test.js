import App from "../src/main";

test("obtenerCercano100(200, 300, 400) regresa 200", () => {
  let myApp = new App();
  expect(myApp.obtenerCercano100(200, 300, 400)).toBe(200);
});

test("obtenerCercano100(300, 200, 400) regresa 200", () => {
  let myApp = new App();
  expect(myApp.obtenerCercano100(300, 200, 400)).toBe(200);
});

test("obtenerCercano100(300, 400, 200) regresa 200", () => {
  let myApp = new App();
  expect(myApp.obtenerCercano100(300, 400, 200)).toBe(200);
});

test("obtenerCercano100(-100, 50, 105) regresa 200", () => {
  let myApp = new App();
  expect(myApp.obtenerCercano100(-100, 50, 105)).toBe(105);
});

test("obtenerCercano100(10, 20, 30) regresa 30", () => {
  let myApp = new App();
  expect(myApp.obtenerCercano100(10, 20, 30)).toBe(30);
});

test("obtenerCercano100(10, 20, 30) regresa 30", () => {
  let myApp = new App();
  expect(myApp.obtenerCercano100(10, 10, 30)).toBe(30);
});
