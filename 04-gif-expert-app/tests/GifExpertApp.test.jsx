import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("debe de mostrar el titulo correcto", () => {
    render(<GifExpertApp />);
    const titleElement = screen.getByText("GifExpertApp", { selector: "h1" });
    expect(titleElement).toBeTruthy();
  });

  test("debe de iniciar con la categoria One Punch", () => {
    render(<GifExpertApp />);
    const categoryElement = screen.getByText("One Punch");
    expect(categoryElement).toBeTruthy();
  });

  test("debe de agregar una nueva categoría si no está duplicada", () => {
    render(<GifExpertApp />);
    const input = screen.getByPlaceholderText("Buscar Gifs");

    fireEvent.change(input, { target: { value: "New Category" } });

    fireEvent.submit(input);

    expect(screen.getByText("New Category")).toBeTruthy();
  });
  test("no debe agregar una categoría si ya está duplicada", () => {
    render(<GifExpertApp />);
    const input = screen.getByPlaceholderText("Buscar Gifs");

    fireEvent.change(input, { target: { value: "One Punch" } });
    fireEvent.submit(input);

    fireEvent.change(input, { target: { value: "One Punch" } });
    fireEvent.submit(input);

    const categoryElements = screen.getAllByText("One Punch");
    expect(categoryElements.length).toBe(1);
  });
});
