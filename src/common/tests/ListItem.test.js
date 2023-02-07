import { create } from "react-test-renderer";
import ListItem from "../components/ListItem";

describe("ListItem Test", () => {

    it("should renders the component", () => {
        const renderer = create(<ListItem />);

        expect(renderer).toBeTruthy();
    });

    test("should renders the component [snapshot]", () => {
        const listItem = create(<ListItem text isCheckable />);

        const json = listItem.toJSON();

        expect(json).toMatchSnapshot();
    });

});