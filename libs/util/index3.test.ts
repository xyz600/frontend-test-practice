import * as Fetcher from "."

describe("callback", () => {
    test("正常系", async () => {
        const mockFn = jest.fn();
        const number = await Fetcher.onChange(mockFn);

        expect(number).toBe(50);
        expect(mockFn).toHaveBeenCalledWith("hello world");
    });
})