import styled from "styled-components";

const WordContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: none;
`;

const Letter = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    text-transform: uppercase;
    border: solid 1px green;
    border-radius: 4px;
    background-color: green;
    color: white;
    width: 16px;
    height: 16px;
    font-weight: bold;
    align-items: center;
`;


export default function WordDisplay({ word }) {
    return (
        <WordContainer aria-label={word}>
            {[...word].map((letter, index) => (
                <Letter key={index}>{letter}</Letter>
            ))}
        </WordContainer>
    );
}