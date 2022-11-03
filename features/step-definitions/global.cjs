import { Given as Angenommen } from "@cucumber/cucumber";
import React from "react";
import { oeffneAnwendung } from "../support/application";
import {updateDataAction} from "../../src/reducer";

Angenommen("es gibt folgende Bohnenarten in der Anwendung", async function(
  dataTable
) {
  for (const row of dataTable.hashes()) {
    const id = row["Id"];
    const art = row["Bohne"];
    const ekp = row["Einkaufspreis in Euro"];
    const vkp = row["Verkaufspreis in Euro"];
    const marge = row["Marge in Prozent"];
    this.store.dispatch(updateDataAction({ id, art, ekp, vkp, marge }));
  }
});

Angenommen("die Anwendung ist geöffnet", async function() {
  await oeffneAnwendung(this);
});