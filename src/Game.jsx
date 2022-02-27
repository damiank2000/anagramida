import GameBoard from "./GameBoard";
import { useRandomNumberGenerator } from "./useRandomNumberGenerator";
import { useScrambler } from "./useScrambler";
import { useData } from "./useData";

export default function Game() {
    const { getRandomWord } = useData();
    const { getRandomNumberBetween } = useRandomNumberGenerator();
    const { scrambleWord } = useScrambler();

    const generateRandomLines = (word) => {
        const highestColumn = word.length;
        const numberOfLines = getRandomNumberBetween(2, 20);

        let lines = new Array();
        for (var i = 0; i < numberOfLines; i++) {
            const column = getRandomNumberBetween(1, highestColumn);
            lines.push({ column });
        }
        return lines;
    };

    const word = getRandomWord();
    const lines = generateRandomLines(word);
    const scrambledWord = scrambleWord(word, lines);

    return (
        <GameBoard word={word} scrambledWord={scrambledWord} initialLines={[]} />
    );
}
