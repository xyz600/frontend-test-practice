import { add, sub } from "./index"

describe("add", () => {
    test("1 + 2 = 3 になる", () => {
        expect(add(1, 2)).toBe(3);
    });

    test("和が100以上の場合に100になる", () => {
        expect(add(50, 75)).toBe(100);
    });

    test("範囲外の数字を入れたら例外を出す", () => {
        expect(() => add(-1, 40)).toThrow();
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