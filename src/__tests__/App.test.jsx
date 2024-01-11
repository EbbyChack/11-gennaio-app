import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import CommentArea from "../components/CommentArea";
import App from "../App";
import fantasy from "../data/fantasy.json";

it("Welcome has mounted", () => {
  render(<Welcome />);

  expect(screen.getByText("Benvenuti in EpiBooks!")).toBeInTheDocument();
});

it("CommentArea has mounted", () => {
  render(<CommentArea />);

  expect(screen.getByTestId("comment-area")).toBeInTheDocument();
});

it("counts the number of books in the json file", async () => {
    render(<App />);

    
    const cards = await screen.findAllByTestId("card");
    
    expect(cards).toHaveLength(fantasy.length);



});

