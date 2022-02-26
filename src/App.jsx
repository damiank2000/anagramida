import Game from "./Game";
import styled from "styled-components";

const PlayArea = styled.div`
    padding: 0 32px 0 32px;
`;

export default function App() {
    return (
        <PlayArea>
            <h1>Anagramida</h1>
            <Game />
        </PlayArea>
    );
}
