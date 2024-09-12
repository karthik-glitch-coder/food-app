import { act } from "react";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import MOCK_RES_MENU_DATA from "../mocks/resMenuMock.json";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RES_MENU_DATA);
    },
  });
});

test("Should render RestaurantMenu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );
  const accordian = screen.getByText("Family Tubs (11)");
  fireEvent.click(accordian);

  expect(screen.getAllByTestId("foodItem").length).toBe(11);

  const addBtns = screen.getAllByRole("button");
  //console.log(addBtns.length);

  fireEvent.click(addBtns[0]);
  const cartItem = screen.getByText("Cart[1]");
  expect(cartItem).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart[2]")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Cart[2]"));
  fireEvent.click(screen.getByText("Clear Cart"));
  expect(screen.getByText("Cart[0]")).toBeInTheDocument();
});
