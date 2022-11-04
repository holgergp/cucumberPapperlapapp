import {
  Given as Angenommen,
  Then as Dann,
  When as Wenn,
} from "@cucumber/cucumber";
import { expectInputToEqual } from "../support/expectations";
import { setInputValue } from "../support/puppetMaster";

Angenommen(
  "sind folgende Bohnenarten in der Anwendung sichtbar",
  function (dataTable) {
    dataTable.hashes().forEach((d) => {
      const art = d["Bohne"];
      const ekp = d["Einkaufspreis in Euro"];
      const vkp = d["Verkaufspreis in Euro"];
      const marge = d["Marge in Prozent"];
      expectInputToEqual("art", art, this);
      expectInputToEqual("ekp", ekp, this);
      expectInputToEqual("vkp", vkp, this);
      expectInputToEqual("marge", marge, this);
    });
  }
);

Wenn(
  "der Bohnenverkäufer den Einkaufspreis auf {string} Euro setzt",
  function (ekp) {
    setInputValue("ekp", ekp);
  }
);

Dann("ist der Verkaufspreis {string} Euro", function (vkp) {
  expectInputToEqual("vkp", vkp, this);
});

Wenn("es nicht weiter geht", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
