const { calculateSum } = require("../src");

describe("function calculateSum", () => {
  test("should return a number", () => {
    expect(typeof calculateSum(13)).toBe("number");
  });

  test("should return a error message if number is invalid", () => {
    expect(calculateSum(0)).toBe('Número inválido. '
      + '\nO número deve ser maior que 0 (zero) e ser um número positivo.');
  });

  test("should return 45 if number is 13", () => {
    expect(calculateSum(13)).toBe(45);
  })
});