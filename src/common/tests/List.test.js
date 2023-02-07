import { create } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import { MockList } from "./MockList";

describe("List Test", () => {

    test("should renders the component [snapshot]", () => {
        const todoList = create(<List list={[]} scale='todo' isCheckable={true} />);

        const json = todoList.toJSON();

        expect(json).toMatchSnapshot();
    });

    it("should return an empty list when rendered", () => {
        const { getByTestId } = render(<List list={[]} scale='todo' isCheckable={true} />);

        const todoList = getByTestId("todo-list");
        const listLength = todoList.children.length;

        expect(listLength).toBe(0);
    });

    it("should map the list according to task completion", () => {
        render(<List list={MockList} scale='todo' />);

        const listInTodo = screen.getByTestId("todo-list");
        const mockListInTodoLength = MockList.filter((item) => item.scale === 'todo').length;

        expect(listInTodo.children).toHaveLength(mockListInTodoLength);
    });

    it("should check that there are checkboxes when the status is todo", () => {
        render(<ListItem text isCheckable />);

        const listWitchCheckboxes = screen.getByTestId("checkbox");

        expect(listWitchCheckboxes).toBeTruthy();
    });
});