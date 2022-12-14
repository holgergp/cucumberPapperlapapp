/* eslint-disable babel/no-invalid-this */
import { After, Before } from "@cucumber/cucumber";
import setUpJsDom from "./setupJsDom";

Before("not @integrationTest", function() {
  this.root = setUpJsDom();
});

After("not @integrationTest", function() {
  _unmountUI(this);
});

function _unmountUI(world) {
  if (world.wrapper) {
    world.wrapper.unmount();
    world.wrapper = undefined;
  }
  if (world.root) {
    world.root = undefined;
  }
  if (world.user) {
    world.user = undefined;
  }
}
