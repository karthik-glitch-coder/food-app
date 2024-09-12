import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA_RESCARD from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should load Restaurant Card", () => {
  render(<RestaurantCard resData={MOCK_DATA_RESCARD} />);
  const name = screen.getByText("Subway");
  expect(name).toBeInTheDocument();
});
