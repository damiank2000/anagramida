const swapLetters = (word, leftSwapLetterPosition) => {
    const beforeLetters =
        leftSwapLetterPosition > 0 ?
            word.slice(0, leftSwapLetterPosition) :
            "";
    const leftLetter = word.charAt(leftSwapLetterPosition);
    const rightLetter = word.charAt(leftSwapLetterPosition + 1);
    const afterLetters = word.slice(leftSwapLetterPosition + 2);
    return `${beforeLetters}${rightLetter}${leftLetter}${afterLetters}`;
};

const scrambleWord = (word, lines) => {
    let scrambledWord = `${word}`;

    lines.forEach(element => {
        if (element.column) {
            scrambledWord = swapLetters(scrambledWord, element.column - 1);
        }
    });

    return scrambledWord;
};

export function useScrambler() {
    return {
        scrambleWord
    };
}