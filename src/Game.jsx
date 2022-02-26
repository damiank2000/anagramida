import GameBoard from "./GameBoard";
import { useScrambler } from "./useScrambler";
import { useData } from "./useData";

const generateRandomLines = (word) => {

    const highestColumn = word.length;
    const numberOfRows = Math.floor(Math.random() * 20) + 1;

    let rows = new Array();
    for (var i = 0; i < numberOfRows; i++) {
        const column = Math.floor(Math.random() * highestColumn) + 1;
        rows.push({ column });
    }
    return rows;
};


export default function Game() {

    const { scrambleWord } = useScrambler();
    const words = useData();

    const word = words[Math.floor(Math.random() * words.length)];
    const lines = generateRandomLines(word);
    const scrambledWord = scrambleWord(word, lines);

    return (
        <GameBoard word={word} scrambledWord={scrambledWord} initialLines={[]} />
    );
}