import App from "../src/main";

test("esMultiplo() toBe true", () => {
  let myApp = new App();
  let num1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  let num2 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
  for (let i = 0; i < num1.length; i++) {
    expect(myApp.esMultiplo(num1[i] * num2[i], num1[i])).toBe(true);
  }
});

test("esMultiplo() toBe false", () => {
  let myApp = new App();
  let num1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  let num2 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
  for (let i = 0; i < num1.length; i++) {
    expect(myApp.esMultiplo(num1[i] * num2[i] + 1, num1[i])).toBe(false);
  }
});
