import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import Body from "../Body";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should cart have 0 items in Header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart[0]");

  expect(cartItems).toBeInTheDocument();
});

// test("should cart have 0 items in Header component", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//         <Body />
//       </Provider>
//     </BrowserRouter>
//   );

//   const contact = screen.getByText("Contact Us");
//   fireEvent.click(contact);
//   const submit = screen.getByRole("button");
//   expect(submit).toBeInTheDocument();
// });

