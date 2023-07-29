
export class RangeError extends Error { };

export const add = (a: number, b: number): number => {

    if (a < 0 || 100 < a || b < 0 || 100 < b) {
        throw new RangeError("入力値は0～100の間にしてください");
    }

    return Math.min(100, a + b);
}

export const sub = (a: number, b: number): number => {
    if (a < b) {
        return 0;
    }
    return a - b;
}