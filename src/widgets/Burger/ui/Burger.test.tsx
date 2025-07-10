import { fireEvent, screen } from "@testing-library/react";
import { Burger } from "./Burger";
import { MemoryRouter } from "react-router";
import { withTranslation } from "react-i18next";
import { renderWithTranslation } from "shared/lib/renderWithTranslation/renderWithTranslation";

describe("Burger test", () => {

  const BurgerWithTranslation = withTranslation()(Burger);

  test("Burger render", () => {
    renderWithTranslation(
      <MemoryRouter>
        <BurgerWithTranslation />
      </MemoryRouter>
    );
    expect(screen.getByTestId("burger")).toBeInTheDocument();
  });

  test("should render burger menu when click on button", () => {
    renderWithTranslation(
      <MemoryRouter>
        <BurgerWithTranslation />
      </MemoryRouter>
    );
    
    const toggleBtn = screen.getByTestId('burger-button');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("burger")).toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("burger-menu")).not.toHaveClass('collapsed');
  });
});
