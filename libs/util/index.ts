
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
} 