#language: de
Funktionalität: Einen absoluten Rabatt auf eine Bohneart anwenden
  Als Bohnenzwischenhändler möchte ich auch absolute Rabatte auf einen Preis anwenden

  Grundlage:
    Angenommen die Anwendung ist geöffnet

  Szenario: Ein neuer absoluter Rabatt soll gewährt werden
    Angenommen es gibt folgende Bohnenarten in der Anwendung
      | Id | Bohne     | Einkaufspreis in Euro | Marge in Prozent | Verkaufspreis in Euro | absoluter Rabatt  |
      | 1  | Äthiopien | 10.00                 | 30               | 13.00                 | 0                |
    Wenn der Bohnenverkäufer einen absoluten Rabatt von "10" Euro gewährt
    Dann ist der absolute Rabatt von "10" Euro in der Anwendung sichtbar
    Und ist der Verkaufspreis mit Rabatt '3.00' Euro
    Und ist der Verkaufspreis '13.00' Euro