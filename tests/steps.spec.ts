import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page).toHaveTitle(/Cedar Take-home/);
});

test("payment link works", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.getByRole("button", { name: "Pay total" }).click();

  await expect(
    page.getByRole("heading", { name: "Payment information" }),
  ).toBeVisible();
});

test("happy path works", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Pay total" }).click();

  await page.getByLabel("Card Number").fill("4242424242424242");
  await page.getByLabel("Expires").fill("02/30");
  await page.getByLabel("Security Code").fill("123");
  await page.getByLabel("Name on card").fill("Alice X");
  await page.getByLabel("Zip code").fill("12345");

  await page.getByRole("button", { name: "Continue" }).click();

  // Step Review
  await expect(
    page.getByRole("heading", { name: "Review and pay" }),
  ).toBeVisible();
  await expect(page.getByText("$600.00", { exact: true })).toBeVisible();

  await page.getByRole("button", { name: "Pay $" }).click();

  // Step Thanks
  await expect(
    page.getByRole("heading", { name: "Thank you for your payment!" }),
  ).toBeVisible();
});
