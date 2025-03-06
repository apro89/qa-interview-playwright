import { test, expect, chromium } from "@playwright/test";
import { GooglePage } from "../pages/googlePage";
import { WikipediaPage } from "../pages/wikipediaPage";
import { formatYear } from "../helpers/utils";

test.use({ storageState: "auth.json" });

test("Search 'automation' on Google, verify Wikipedia article and year", async ({
  page,
}) => {
  const googlePage = new GooglePage(page);
  const wikipediaPage = new WikipediaPage(page);

  await googlePage.navigate();
  await googlePage.searchFor("automation");

  await googlePage.clickOnWikipediaLink();

  await wikipediaPage.takeScreenshot("test/e2e/tests/wikipedia_page.png");

  const yearText = await wikipediaPage.getFirstAutomaticProcessYear();
  const formattedYear = formatYear(yearText);
  console.log("First automatic process year:", formattedYear);
  expect(parseInt(formattedYear)).toBeGreaterThan(0);
});
