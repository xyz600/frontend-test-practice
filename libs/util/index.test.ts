import * as Fetcher from "."

describe("wait", () => {
    test("指定時間待つと、経過時間を返す", () => {
        const time = 50;
        Fetcher.wait(time).then((duration) => {
            expect(duration).toBe(time);
        });
    });

    test("指定時間待つと、経過時間を返す(async)", async () => {
        const time = 50;
        const value = await Fetcher.wait(time);
        expect(value).toBe(time);
    });

    test("指定時間待つと、経過時間を返す(async)", async () => {
        const time = 60;
        try {
            const value = await Fetcher.wait(time);
        } catch (err) {
            expect(err).toBe(time);
        }
    });
});

jest.mock(".", () => ({
    ...jest.requireActual("."),
    fetchProfile: () => ({
        user_agent: "hoge"
    })
}));

describe("fetchProfile", () => {
    test("正常系", async () => {
        const response = await Fetcher.fetchProfile();
        expect(response.user_agent).toBe("hoge");
    })
})