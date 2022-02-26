import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import GameBoard from "./GameBoard";


test("Renders a test word and an unscrambled copy if no lines", () => {
    render(
        <GameBoard scrambledWord="hello" initialLines={[]} />
    );

    expect(screen.getAllByLabelText("hello")).toHaveLength(2);
});

test("An empty line does nothing", () => {
    render(
        <GameBoard scrambledWord="hello" initialLines={[{}]} />
    );

    expect(screen.getAllByLabelText("hello")).toHaveLength(2);
});

test("A line between the first two letters swaps them", () => {
    render(
        <GameBoard scrambledWord="hello" initialLines={[{ column: 1 }]} />
    );

    expect(screen.getByLabelText("ehllo")).toBeInTheDocument();
});

test("A line between the second two letters swaps them", () => {
    render(
        <GameBoard scrambledWord="hello" initialLines={[{ column: 2 }]} />
    );

    expect(screen.getByLabelText("hlelo")).toBeInTheDocument();
});

test("Subsequent swaps are processed in order", () => {
    render(
        <GameBoard scrambledWord="hello" initialLines={[{ column: 1 }, { column: 2 }]} />
    );

    expect(screen.getByLabelText("elhlo")).toBeInTheDocument();
});

test("Displays a row for each line", () => {
    render(
        <GameBoard scrambledWord="hello" initialLines={[{ column: 1 }, { column: 2 }]} />
    );

    expect(screen.getByTestId("line-row-1")).toBeInTheDocument();
    expect(screen.getByTestId("line-row-2")).toBeInTheDocument();
});

test("A button exists between every pair of letters", () => {
    render(
        <GameBoard scrambledWord="hello" initialLines={[]} />
    );

    expect(screen.getByTestId("button-1")).toBeInTheDocument();
    expect(screen.getByTestId("button-2")).toBeInTheDocument();
    expect(screen.getByTestId("button-3")).toBeInTheDocument();
    expect(screen.getByTestId("button-4")).toBeInTheDocument();

});

test("Pressing a button swaps two letters", () => {
    render(
        <GameBoard scrambledWord="hello" initialLines={[]} />
    );

    userEvent.click(screen.getByTestId("button-1"));

    expect(screen.getByLabelText("ehllo")).toBeInTheDocument();
});

test("Solving the anagram shows a message", () => {
    render(
        <GameBoard word="hello" scrambledWord="ehllo" initialLines={[]} />
    );

    userEvent.click(screen.getByTestId("button-1"));

    expect(screen.getByText("WELL DONE")).toBeInTheDocument();
});
