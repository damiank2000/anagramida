import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export default function ButtonRow({ numberOfButtons, onButtonClicked }) {

    const handleButtonClicked = (index) => {
        if (onButtonClicked)
            onButtonClicked(index);
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
        <ButtonContainer>
            {getButtons(numberOfButtons)}
        </ButtonContainer>
    )
}