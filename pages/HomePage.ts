import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  public readonly productsButton: Locator =
    this.page.getByTestId("nav-products");

  public constructor(page: Page) {
    super(page);
  }

  public async navigateToProductsPage(): Promise<void> {
    await this.productsButton.click();
  }
}
