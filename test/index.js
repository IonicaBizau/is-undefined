const tester = require("tester")
    , isUndefined = require("../lib")
    ;

tester.describe("undefined", test => {
    test.it("undefined should be undefined", () => {
        test.expect(isUndefined(undefined), true);
    });
    test.it("anything else should not be undefined", () => {
        test.expect(isUndefined(42), false);
        test.expect(isUndefined(0), false);
        test.expect(isUndefined("foo"), false);
        test.expect(isUndefined(""), false);
    });
});
