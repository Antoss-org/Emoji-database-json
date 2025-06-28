import * as changeCase from "change-case";
function formatExportLine({
  currentCldrName,
  slug,
  title
}) {
  const name = currentCldrName?.match(/^\D/) ? currentCldrName : title;
  const namePascalCase = changeCase.pascalCase(name);
  return `export { default as ${namePascalCase} } from "./${slug}.json" with { type: "json" };
`;
}
export {
  formatExportLine
};
//# sourceMappingURL=formatExportLine.js.map