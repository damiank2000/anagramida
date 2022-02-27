import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
    padding: 0 8px 0 8px;
`;

const LineRow = styled.div`
    height: 16px;
    width: 100%;
    border: none;
    display: flex;
    justify-content: space-between;
`;

const VerticalLine = styled.div`
    width: 16px;
    height: 16px;
    background-color: gray;
    border-bottom: none;
`;

const HorizontalLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: black;
`;

const NoHorizontalLine = styled.div`
    width: 100%;
    height: 16px;
    background-color: white;
`;

export default function ConnectingLineGrid({ lines, scrambledWord }) {
    return (
        <GridContainer>
            {lines.map((line, index) => (
                <LineRow key={`line-row-${index}`} data-testid={`line-row-${index + 1}`}>
                    {[...scrambledWord].map((_, index) => (
                        <React.Fragment key={index}>
                            <VerticalLine />
                            {index < scrambledWord.length - 1 &&
                                (index === (line.column - 1) ?
                                    <HorizontalLine /> :
                                    <NoHorizontalLine />)
                            }
                        </React.Fragment>
                    ))}
                </LineRow>
            ))}
        </GridContainer>
    );
}
