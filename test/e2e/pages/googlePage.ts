import { Page, Locator, expect } from "@playwright/test";

export class GooglePage {
  private page: Page;
  private searchInput: Locator;
  private acceptCookiesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('textarea[name="q"]');
    this.acceptCookiesButton = page.getByRole("button", {
      name: /Aceitar tudo/i,
    });
  }

  async navigate() {
    await this.page.goto("https://www.google.com");

    if (await this.acceptCookiesButton.isVisible()) {
      await this.acceptCookiesButton.click();
    }
  }

  async searchFor(term: string) {
    await this.searchInput.fill(term);
    await this.searchInput.press("Enter");
  }

  async clickOnWikipediaLink() {
    const wikipediaLink = this.page.getByRole("link", {
      name: "Automation Wikipedia https://",
    });
    await expect(wikipediaLink).toBeVisible();
    await wikipediaLink.first().click();
  }
}
