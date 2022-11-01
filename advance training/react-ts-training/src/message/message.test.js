import { render, screen } from "@testing-library/react";
import Message from "./Message";


describe("Message",()=>{
    test("should render on the page",()=>{
        render(<Message/>)
    
        const messageElem = screen.getByText(/message/i);
        expect(messageElem).toBeInTheDocument();
        const randomElem = screen.queryByText(/qoiwdjoqwjdqwdqwo/i);
        expect(randomElem).not.toBeInTheDocument();
    })
    
    test("should render with props",()=>{
        render(<Message name="somebody"/>);
        expect(screen.getByText(/somebody/i)).toBeInTheDocument();
    })
})

