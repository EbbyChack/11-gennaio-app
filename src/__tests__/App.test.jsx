import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

it("Welcome has mounted", () => {
  render(<Welcome />);

  expect(screen.getByText("Benvenuti in EpiBooks!")).toBeInTheDocument();
});

