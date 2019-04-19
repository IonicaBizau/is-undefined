const tester = require("tester")
    , isUndefined = require("../lib")
    ;

tester.describe("undefined", test => {
    test.it("undefined should be undefined", () => {
        test.expect(isUndefined(undefined)).toBe(true);
    });
    test.it("anything else should not be undefined", () => {
        test.expect(isUndefined(42)).toBe(false);
        test.expect(isUndefined(0)).toBe(false);
        test.expect(isUndefined("foo")).toBe(false);
        test.expect(isUndefined("")).toBe(false);
    });
});
