import React from "react";
import { render } from "@testing-library/react";
import App from "../../src/App";
import userEvent from "@testing-library/user-event";

export async function oeffneAnwendung(world) {
  world.user = userEvent.setup({ document: world.root });
  world.wrapper = render(<App store={world.store} />, {
    container: world.root,
  });
}
