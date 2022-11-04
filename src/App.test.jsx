import App from "./App";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";

describe("Die Anwendung", () => {
  const mockStore = configureStore();
  const store = mockStore({
    bohnen: [
      {
        id: "1",
        art: "Äthiopien",
        vkp: 12.0,
        marge: 20.0,
        ekp: 10.0,
        rabatt: 0.0,
        vkpRabatt: 12.0,
      },
    ],
  });
  it("Soll folgende Bohnendaten zeigen", () => {
    const { queryByTestId } = render(<App store={store} />);
    expect(queryByTestId("art").value).toEqual("Äthiopien");
    expect(queryByTestId("ekp").value).toEqual("10");
    expect(queryByTestId("vkp").value).toEqual("12");
    expect(queryByTestId("marge").value).toEqual("20");
  });
});
