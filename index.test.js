describe("Test suit 1", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("must be 5", () => {
    jest.doMock("./utils.js", () => jest.fn().mockReturnValue(5));
    const plus5 = require("./index");
    expect(plus5(1)).toBe(5);
  });

  it("must be 1", () => {
    jest.doMock("./utils.js", () => jest.fn().mockReturnValue(1));
    const plus5 = require("./index");
    expect(plus5(1)).toBe(1);
  });

  it("must be 6", () => {
    const plus5 = require("./index");
    expect(plus5(1)).toBe(6);
  });
});
