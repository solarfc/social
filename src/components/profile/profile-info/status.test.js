import React from "react";
import { create } from "react-test-renderer";
import Status from "./status";

describe("Profile Status component", () => {
    test("status from props should be in the state", () => {
        const component = create(<Status status="new status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("new status");
    });

    test("after creation h3 with correct status should be displayed", () => {
        const component = create(<Status status="new status" />);
        const root = component.root;
        const status = root.findByType("h3");
        expect(status.children.length).toBe(1);
    });

    test("after creation h3 with correct status should be new status", () => {
        const component = create(<Status status="new status" />);
        const root = component.root;
        const status = root.findByType("h3");
        expect(status.children[0]).toBe("new status");
    });

    test("input should be displayed in edit mode instead of h3", () => {
        const component = create(<Status status="new status" />);
        const root = component.root;
        const status = root.findByType("h3");
        status.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe("new status");
    });

    // test("callback should be called", () => {
    //     const mockCallback = jest.fn();
    //     const component = create(<Status status="new status" setUserStatusThunkCreator={mockCallback}/>);
    //     const instance = component.getInstance();
    //     instance.onToggleStatus();
    //     expect(mockCallback.mock.calls.length).toBe(1);
    // });

});