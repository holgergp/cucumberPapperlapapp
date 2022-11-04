import { Given as Angenommen } from "@cucumber/cucumber";
import React from "react";
import { oeffneAnwendung } from "../support/application";
import { addData } from "../../src/reducer";

Angenommen(
  "es gibt folgende Bohnenarten in der Anwendung",
  async function (dataTable) {
    for (const row of dataTable.hashes()) {
      const id = row["Id"];
      const art = row["Bohne"];
      const ekp = row["Einkaufspreis in Euro"];
      const vkp = row["Verkaufspreis in Euro"];
      const marge = row["Marge in Prozent"];

      this.store.dispatch(addData({ id, art, ekp, vkp, marge, rabatt: "0.0" }));
    }
  }
);

Angenommen("die Anwendung ist geöffnet", async function () {
  await oeffneAnwendung(this);
});
