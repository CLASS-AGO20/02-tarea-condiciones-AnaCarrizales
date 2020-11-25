import App from "../src/main";

test("esPar(0) toBe false", () => {
  let myApp = new App();
  expect(myApp.esPar(0)).toBe(false);
});

test("esPar(pairNumber) toBe true", () => {
  let myApp = new App();
  for (let i = 2; i < 20; i += 2) {
    expect(myApp.esPar(i)).toBe(true);
  }
});

test("esPar(oddNumber) toBe false", () => {
  let myApp = new App();
  for (let i = 1; i < 20; i += 2) {
    expect(myApp.esPar(i)).toBe(false);
  }
});
