
export const add = (a: number, b: number): number => {
    return a + b;
}

export const sub = (a: number, b: number): number => {
    if (a < b) {
        return 0;
    }
    return a - b;
}