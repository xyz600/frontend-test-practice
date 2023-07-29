import { add } from "./index"

describe("add", () => {
    test("add: 1 + 2 = 3 になる", () => {
        expect(add(1, 2)).toBe(3);
    });
});
