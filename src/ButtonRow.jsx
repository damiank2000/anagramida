import styled from "styled-components";

const ButtonRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 12px 0 12px;
`;

const VerticalLine = styled.div`
    width: 16px;
    height: 48px;
    background-color: gray;
    border-bottom: none;
`;

const ButtonContainer = styled.div`
    width: 100%;
    height: 32px;
    background-color: white;
    text-align: center;
`;

const Button = styled.button`
    width: 32px;
    height: 32px;
    background-color: palegoldenrod;
    border: 0;
    border-radius: 4px;
    font-size: larger;
    font-weight: bold;

    &:hover {
        background-color: goldenrod;
    }
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
                <VerticalLine />
            );
            buttons.push(
                <ButtonContainer>
                    <Button
                        key={`button-${buttonIndex}`}
                        data-testid={`button-${buttonIndex}`}
                        onClick={() => handleButtonClicked(buttonIndex)}
                    >
                        +
                    </Button>
                </ButtonContainer>
            );
        }
        buttons.push(
            <VerticalLine />
        );
        return buttons;
    }

    return (
        <ButtonRowContainer>
            {getButtons(numberOfButtons)}
        </ButtonRowContainer>
    );
}