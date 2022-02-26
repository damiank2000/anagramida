import styled from "styled-components";
import WordDisplay from "./WordDisplay";
import { useScrambler } from "./useScrambler";
import React, { useState } from "react";

const LineRow = styled.div`
    height: 16px;
    width: 100%;
    border: none;
    display: flex;
    justify-content: space-between;
`;

const DownwardLine = styled.div`
    width: 16px;
    height: 16px;
    background-color: gray;
    border-bottom: none;
`;

const LineContainer = styled.div`
    width: 100%;
    height: 16px;
    background-color: white;
    border-bottom: none;
`;

const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: black;
`;

const GridDisplay = styled.div`
    padding: 0 8px 0 8px;
`;

const ButtonDisplay = styled.div`
    display: flex;
    justify-content: space-around;
`;

export default function GameBoard({ word, scrambledWord, initialLines }) {

    const [lines, setLines] = useState(initialLines);
    const { scrambleWord } = useScrambler();
    const unscrambledWord = scrambleWord(scrambledWord, lines);

    const handleButtonClicked = (index) => {
        setLines([{ column: index }, ...lines]);
    }

    const getButtons = (numberOfButtons) => {
        let buttons = [];
        for (var i = 0; i < numberOfButtons; i++) {
            const buttonIndex = i + 1;
            buttons.push(
                <button
                    key={`button-${buttonIndex}`}
                    data-testid={`button-${buttonIndex}`}
                    onClick={() => handleButtonClicked(buttonIndex)}
                >
                    v
            </button>
            );
        }
        return buttons;
    }

    return (
        <>
            <WordDisplay word={scrambledWord} />
            <ButtonDisplay>
                {getButtons(scrambledWord.length - 1)}
            </ButtonDisplay>
            <GridDisplay>
                {lines.map((line, index) => (
                    <LineRow key={`line-row-${index}`} data-testid={`line-row-${index + 1}`}>
                        {[...scrambledWord].map((_, index) => (
                            <React.Fragment key={index}>
                                <DownwardLine />
                                {index < scrambledWord.length - 1 &&
                                    (index === (line.column - 1) ?
                                        <Line /> :
                                        <LineContainer />)
                                }
                            </React.Fragment>
                        ))}
                    </LineRow>
                ))}
            </GridDisplay>
            <WordDisplay word={unscrambledWord} />
        </>
    );
}

