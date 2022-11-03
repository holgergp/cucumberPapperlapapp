const babel = "--require-module @babel/register";
const commonJS = "--require features/**/*.cjs";
const noStrict = "--no-strict";
const asyncAwaitSnippets =
  "--format-options '" +
  JSON.stringify({ snippetInterface: "async-await" }) +
  "'";
const pretty = "-f node_modules/cucumber-pretty";
const now = "--tags @now";
const notIntegrationTest = '--tags "not @integrationTest"';
const usage = "--dry-run --format usage";
const report = "--format html:cucumber-report/index.html";
const coverage =
  "--format 'json:coverage/cucumber_report.json' features/**/*.feature";
const rR = "features/**/+(r|R)*.feature";

module.exports = {
  default: [
    babel,
    commonJS,
    notIntegrationTest,
    asyncAwaitSnippets,
    noStrict,
  ].join(" "),
  trace: [babel, commonJS, pretty, notIntegrationTest, asyncAwaitSnippets].join(
    " "
  ),
  report: [
    babel,
    commonJS,
    report,
    notIntegrationTest,
    asyncAwaitSnippets,
  ].join(" "),
  traceNow: [babel, commonJS, now, pretty, asyncAwaitSnippets].join(" "),
  now: [babel, commonJS, now, asyncAwaitSnippets].join(" "),
  usage: [babel, commonJS, usage].join(" "),
  coverage: [babel, commonJS, coverage, notIntegrationTest].join(" "),
  rR: [babel, commonJS, notIntegrationTest, rR].join(" "),
};
