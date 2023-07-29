import { add, sub } from "./index"

describe("add", () => {
    test("1 + 2 = 3 になる", () => {
        expect(add(1, 2)).toBe(3);
    });
});

describe("sub", () => {
    test("3 - 2 = 1 になる", () => {
        expect(sub(3, 2)).toBe(1);
    });

    test("2 - 3 = 0 になる", () => {
        expect(sub(2, 3)).toBe(0);
    });

})