import { Page, Locator, expect } from "@playwright/test";

export class WikipediaPage {
  private page: Page;
  private firstAutomaticProcessYear: Locator;

  constructor(page: Page) {
    this.page = page;
    //TODO: find first automatic process
    this.firstAutomaticProcessYear = page.locator("MOCKED LOCATOR");
  }

  async getFirstAutomaticProcessYear(): Promise<string> {
    await expect(this.firstAutomaticProcessYear).toBeVisible();
    return this.firstAutomaticProcessYear.innerText();
  }

  async takeScreenshot(filename: string) {
    await this.page.screenshot({ path: filename, fullPage: true });
  }
}
