import formatDate from "./dateFormatting";

test("given a date string will format it to a YYYY-MM-DD format", () => {
  expect(formatDate("2022-09-26T19:01:25.736Z")).toBe("2022-09-26");
  expect(formatDate("2022-09-27 19:18:22.574498")).toBe("2022-09-27");
  expect(formatDate("2022-09-23 21:50:31.510492")).toBe("2022-09-23");
});
