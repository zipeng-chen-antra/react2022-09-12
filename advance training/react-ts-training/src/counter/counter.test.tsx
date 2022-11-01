import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter",()=>{
    test("should update its count value by 1 when clicking add button",()=>{
        render(<Counter/>);

        const addBtn = screen.getByRole("add-btn");
        userEvent.click(addBtn);
        expect(screen.getByText(/1/i)).toBeInTheDocument();
        userEvent.click(addBtn);
        expect(screen.getByText(/2/i)).toBeInTheDocument();



    })


})