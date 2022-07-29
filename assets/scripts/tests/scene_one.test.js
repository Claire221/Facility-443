/* jshint esversion: 11 */
//  * @jest-environment jsdom



let labCoat;

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();

    labCoat = require("../stage_functions").labCoat;
})

describe("labCoat", () => {
    describe("labCoat value", () => {
        test("labCoat should be false", () => {
            expect(labCoat).toBe(false);
        })
    });
});