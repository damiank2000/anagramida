export function useRandomNumberGenerator() {
    const getRandomNumberBetween = (start, end) => {
        return Math.floor(Math.random() * (end - start + 1) + start);
    }

    return { getRandomNumberBetween };
}