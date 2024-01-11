import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import CommentArea from "../components/CommentArea";

it("Welcome has mounted", () => {
  render(<Welcome />);

  expect(screen.getByText("Benvenuti in EpiBooks!")).toBeInTheDocument();
});

it("CommentArea has mounted", () => {
  render(<CommentArea />);

  expect(screen.getByTestId("comment-area")).toBeInTheDocument();
});

