/**
 * @jest-environment jsdom
 */


// module.exports is required to export the objects and functions to the Jest testing file.
// The if statement prevents this from logging an error in the browser console.
// https://stackoverflow.com/a/68671391
// if (typeof module !== "undefined") module.exports = {
//     const test = require(".scene_one");

    
// };

// when start game is called clitch is 0 time is 0

// const testVariable = require("../stage_functions");

// beforeEach(() => {
//     let fs = require("fs");
//     let fileContents = fs.readFileSync("index.html", "utf-8");
//     document.open();
//     document.write(fileContents);
//     document.close();
// })

// describe("testVariable", () => {
//     describe("testVariable value", () => {
//         test("testVariable should be equal to 7", () => {
//             expect(testVariable).toEqual(7);
//         })
//     });
// });

const labCoat = require("../stage_functions");

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("labCoat", () => {
    describe("labCoat value", () => {
        test("labCoat should be false", () => {
            expect(labCoat).toBe(false);
        })
    });
});