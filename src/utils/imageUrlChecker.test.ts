import imageUrlChecker from "./imageUrlChecker";

test("Function to test an image url for a https://...format", () => {
  expect(imageUrlChecker("first test")).toBe(false);
  expect(imageUrlChecker("https://wallpaperaccess.com/full/882320.jpg")).toBe(
    true
  );
  expect(imageUrlChecker("")).toBe(true);
});
