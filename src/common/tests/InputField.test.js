import { create } from "react-test-renderer";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import InputField from "../components/InputField";

describe("Rendering Test", () => {

    it("should renders the component", () => {
        const renderer = create(<InputField />);

        expect(renderer).toBeTruthy();
    });

    it("should renders the component [snapshot]", () => {
        const renderer = create(<InputField />);

        const json = renderer.toJSON();

        expect(json).toMatchSnapshot();
    });
});

describe("InputField Test", () => {

    beforeEach(() => {
        render(<App />);
    });

    it("should renders the app", () => {
        const title = screen.getByText(/To do/i);

        expect(title).toBeInTheDocument();
    });

    it("should change the value on the input", () => {
        const input = screen.getByTestId("input-field");
        const inputValue = 'todo-1';

        fireEvent.change(input, { target: { value: inputValue } });

        expect(input.value).toBe(inputValue);
    });

    it("should clear the input when it is submitted", () => {
        const input = screen.getByTestId("input-field");
        const inputValue = 'todo-1';

        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(input);

        expect(input.value).toBe("");
    });

    it("should add a todo when the input is submitted", () => {
        const input = screen.getByTestId("input-field");
        const inputValue = 'todo-1';

        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(input);

        const listItem = screen.getByTestId("todo");

        expect(listItem.textContent).toBe(inputValue);
    });
});