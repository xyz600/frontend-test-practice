import { z } from "zod";

export const wait = (duration: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (duration <= 50) {
                resolve(duration);
            } else {
                reject(duration);
            }
        }, duration);
    });
};

const ProfileSchema = z.object({
    user_agent: z.string()
});

type Profile = z.infer<typeof ProfileSchema>;

export const fetchProfile = async (): Promise<Profile> => {
    const response = await fetch("http://httpbin.org/user-agent");
    if (!response.ok) {
        throw new Error("cannot recieve response");
    }
    return ProfileSchema.parse(await response.json());
}

export const onChange = async (callback: (text: string) => void): Promise<number> => {
    const time = 50;
    return new Promise((resolve) => {
        setTimeout(() => {
            callback("hello world");
            resolve(time);
        }, time);
    });
}