import { Page } from "@playwright/test";

export abstract class BasePage {
  public readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async navigateToHomePage(url: string) {
    await this.page.goto(url);
  }

  public async waitForLoad() {
    await this.page.waitForLoadState("networkidle");
  }
}
