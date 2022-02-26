import GameBoard from "./GameBoard";
import { useScrambler } from "./useScrambler";

const generateRandomLines = (word) => {

    const highestColumn = word.length;
    const numberOfRows = Math.floor(Math.random() * 10) + 1;

    let rows = new Array();
    for (var i = 0; i < numberOfRows; i++) {
        const column = Math.floor(Math.random() * highestColumn) + 1;
        rows.push({ column });
    }
    return rows;
};


export default function Game() {

    const { scrambleWord } = useScrambler();

    // const word = "anagramida";
    const word = "cat"
    const lines = generateRandomLines(word);
    const scrambledWord = scrambleWord(word, lines);

    return (
        <GameBoard word={word} scrambledWord={scrambledWord} initialLines={[]} />
    );
}