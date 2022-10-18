import imageUrlChecker from "./imageUrlChecker";

test("Function to test an image url for a https://...format", () => {
  expect(imageUrlChecker("first test")).toBe(false);
  expect(imageUrlChecker("")).toBe(true);
  expect(imageUrlChecker("randomstringinput")).toBe(false);
  expect(imageUrlChecker("12312312415")).toBe(false);
  expect(imageUrlChecker("https://wallpaperaccess.com/full/882320.jpg")).toBe(
    true
  );
  expect(
    imageUrlChecker(
      "https://files.worldwildlife.org/wwfcmsprod/images/Blue_Whale/hero_small/gex0x01aq_shutterstock_764499823.jpg"
    )
  ).toBe(true);
  expect(
    imageUrlChecker(
      "https://canadiangeographic.ca/wp-content/uploads/2019/06/35879286-O_Boy__A_Double_Date-1-1024x683.jpg"
    )
  ).toBe(true);
});
