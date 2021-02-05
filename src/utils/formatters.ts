import capitalize from "lodash/capitalize";

export const titleCase = (str: string): string =>
  str
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
