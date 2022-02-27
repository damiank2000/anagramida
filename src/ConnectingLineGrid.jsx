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

export default function ConnectingLineGrid({ lines, scrambledWord }) {
    return (
        <GridContainer>
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
        </GridContainer>
    );
}
