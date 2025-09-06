const sayHello = require("./index");

test("returns Hello CI/CD", () => {
  expect(sayHello()).toBe("Hello CI/CD");
});
