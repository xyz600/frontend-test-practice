import { wait } from "."

describe("wait", () => {
    test("指定時間待つと、経過時間を返す", () => {
        const time = 50;
        wait(time).then((duration) => {
            expect(duration).toBe(time);
        });
    });

    test("指定時間待つと、経過時間を返す(async)", async () => {
        const time = 50;
        const value = await wait(time);
        expect(value).toBe(time);
    });

    test("指定時間待つと、経過時間を返す(async)", async () => {
        const time = 60;
        try {
            const value = await wait(time);
        } catch (err) {
            expect(err).toBe(time);
        }
    });
});
