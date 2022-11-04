import { setWorldConstructor } from "@cucumber/cucumber";

import bohnenReducer from "../../src/reducer";
import { configureStore } from "@reduxjs/toolkit";

function BaristaWorld() {
  this.store = configureStore({
    reducer: {
      bohnen: bohnenReducer,
    },
  });
  this.wrapper = undefined;
}

process.on("unhandledRejection", (r) => console.error(r));
setWorldConstructor(BaristaWorld);
