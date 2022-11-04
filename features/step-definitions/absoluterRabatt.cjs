import { Then as Dann, When as Wenn } from "@cucumber/cucumber";
import { setInputValue } from "../support/puppetMaster";
import { expectInputToEqual } from "../support/expectations";

Wenn(
  "der Bohnenverkäufer einen absoluten Rabatt von {string} Euro gewährt",
  function (rabatt) {
    setInputValue("absRabatt", rabatt, this);
  }
);

Dann(
  "ist der absolute Rabatt von {string} Euro in der Anwendung sichtbar",
  function (rabatt) {
    expectInputToEqual("absRabatt", rabatt, this);
  }
);
