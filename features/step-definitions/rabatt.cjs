import { Then as Dann, When as Wenn } from "@cucumber/cucumber";
import { setInputValue } from "../support/puppetMaster";
import { expectInputToEqual } from "../support/expectations";

Wenn(
  "der Bohnenverkäufer einen Rabatt von {string} Prozent gewährt",
  function (rabatt) {
    setInputValue("rabatt", rabatt, this);
  }
);

Dann(
  "ist der Rabatt von {string} Prozent in der Anwendung sichtbar",
  function (rabatt) {
    expectInputToEqual("rabatt", rabatt, this);
  }
);

Dann("ist der Verkaufspreis mit Rabatt {string} Euro", function (vkpRabatt) {
  expectInputToEqual("vkpRabatt", vkpRabatt, this);
});
