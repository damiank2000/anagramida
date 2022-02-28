import styled from "styled-components";
import Word from "./Word";
import ButtonRow from "./ButtonRow";
import ConnectingLineGrid from "./ConnectingLineGrid";
import { useScrambler } from "./useScrambler";
import React, { useState } from "react";

export default function GameBoard({ word, scrambledWord, initialLines }) {

    const [lines, setLines] = useState(initialLines);
    const { scrambleWord } = useScrambler();
    const unscrambledWord = scrambleWord(scrambledWord, lines);

    const handleButtonClicked = (index) => {
        setLines([{ column: index }, ...lines]);
    }

    return (
        <>
            <Word word={scrambledWord} compareWord={scrambledWord} />
            <ButtonRow numberOfButtons={scrambledWord.length - 1} onButtonClicked={handleButtonClicked} />
            <ConnectingLineGrid lines={lines} scrambledWord={scrambledWord} />
            <Word word={unscrambledWord} compareWord={word} />
            {unscrambledWord === word &&
                <h1>WELL DONE</h1>
            }
        </>
    );
}
