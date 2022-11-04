import ReactTestUtils from "react-dom/test-utils";

export async function setInputValueOf(testId, value, world) {
  const element = world.wrapper.getByTestId(testId);
  await world.user.clear(element);
  await world.user.type(element, value);
}

export function setInputValue(selectorOrElement, value) {
  const selector = '[data-testid="' + selectorOrElement + '"]';
  const input = document.querySelector(selector);

  ReactTestUtils.Simulate.focus(input);
  input.value = value;
  ReactTestUtils.Simulate.change(input, { target: { value } });
  ReactTestUtils.Simulate.blur(input);
}

export function getInputValue(selectorOrElement) {
  const input =
    typeof selectorOrElement === "string"
      ? select(selectorOrElement)
      : selectorOrElement;
  return input.value;
}

export function select(selector) {
  const node = document.querySelector(selector);
  if (!node) {
    throw new Error(`Element for selector ${selector} not found`);
  }
  return node;
}

export function getInputValueOf(testId, world) {
  return world.wrapper.getByTestId(testId).value;
}

// noinspection JSUnusedGlobalSymbols
export function logDocument() {
  console.error(global.jsdom.serialize());
}
