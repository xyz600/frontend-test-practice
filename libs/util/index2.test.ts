import * as Fetcher from "."

jest.mock(".");

describe("fetchProfile", () => {
    test("正常系", async () => {
        // こういう風に書くと、単一のテストファイルで stub の切り替えができて便利 
        jest.spyOn(Fetcher, "fetchProfile").mockImplementationOnce(async () => ({
            user_agent: "hoge"
        }));

        const response = await Fetcher.fetchProfile();
        expect(response.user_agent).toBe("hoge");
    })
})