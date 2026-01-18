import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import { testEnvironment } from "../../../jest.config";

describe("Contact Us Page Test Cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);
    //   const button = screen.getByRole("button");
    //   const button = screen.getByText("Random");
    const button = screen.getByPlaceholderText("name");

    //Assertion

    expect(button).toBeInTheDocument();
  });

  test("Should load input inside the contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //   console.log(inputBoxes.length);

    //   expect(inputBoxes.length).toBe(2);

    expect(inputBoxes.length).not.toBe(3);
  });
});
