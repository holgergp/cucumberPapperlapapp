import { getInputValueOf } from "./puppetMaster";
import expect from "expect";

export function expectInputToEqual(testId, expectation, world) {
  expect(getInputValueOf(testId, world)).toEqual(expectation);
}
