import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_RES_LIST_DATA from "../mocks/resListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { isAsyncThunkAction } from "@reduxjs/toolkit";

//Mocking fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RES_LIST_DATA);
    },
  });
});

test("Should Search Restaurant list for Biryani search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  //Before Search anything
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Biryani" } });
  fireEvent.click(searchBtn);

  //Assertion - I should have 1 card after search "Biryani" as searchInput
  const resCard = screen.getAllByTestId("resCard");
  expect(resCard.length).toBe(1);
});

test("Should check Top Rated Restaurant function", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedBtn = screen.getByText("Top Rated Restaurants > 4.3");
  expect(topRatedBtn).toBeInTheDocument();
  fireEvent.click(topRatedBtn);
  const cardsAfterRated = screen.getAllByTestId("resCard");
  //console.log(cardsAfterRated);
  expect(cardsAfterRated.length).toBe(2);
});
