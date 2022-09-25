const validateKey = require("./keys");

describe("validateKey", () => {
  it("should return true for valid JSON", () => {
    expect(validateKey()).toBe(true);
  });
});
