export const minMax = (value: number) => {
    if (value <= 10 && value >= 0) {
        return Number(value);
    } else if (value > 10) {
        return 10;
    } else if (value < 0) {
        return 0;
    }
};
