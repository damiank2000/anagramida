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
    width: 16px;
    height: 16px;
    font-weight: bold;
    align-items: center;
`;

const BasicLetter = styled(Letter) `
    border: solid 1px gray;
    border-radius: 4px;
    background-color: gray;
    color: white;
`;

const CorrectLetter = styled(Letter) `
    border: solid 1px green;
    border-radius: 4px;
    background-color: green;
    color: white;
`;


export default function Word({ word, compareWord }) {
    return (
        <WordContainer aria-label={word}>
            {[...word].map((letter, index) => (
                letter === compareWord.charAt(index) ?
                    <CorrectLetter key={index}>{letter}</CorrectLetter> :
                    <BasicLetter key={index}>{letter}</BasicLetter>
            ))}
        </WordContainer>
    );
}