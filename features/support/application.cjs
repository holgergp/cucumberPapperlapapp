import React from "react"
import { render } from "@testing-library/react";
import App from "../../src/App";

export async function oeffneAnwendung(world) {
  render(<App store={world.store} />, { container: world.root });

  // world.wrapper = mount(<App store={world.store} />, { attachTo: world.root });
}
