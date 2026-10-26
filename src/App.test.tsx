import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the user search box", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Search users")).toBeInTheDocument();
  });
});
