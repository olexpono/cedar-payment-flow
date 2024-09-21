import { test, expect } from "@playwright/test";

test("test form validation", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Pay total" }).click();

  await page.getByText("Card number").click();
  await expect(page.getByLabel("Card number")).toBeFocused();

  await page.getByLabel("Card number").fill("55555aaaa");
  await page.getByLabel("Card number").blur();
  await page.getByRole("button", { name: "Continue" }).click();

  // Complex card number validation visible
  // All others not filled, so after submission attempt they should be required
  await expect(page.locator("form")).toContainText(
    "Card number should be numeric",
  );
  await page.getByLabel("Expires").focus();
  await page.getByLabel("Security").focus();
  await page.getByLabel("Name on card").focus();
  await page.getByLabel("Zip code").focus();
  await expect(page.getByText("Card expiration is required")).toBeVisible();
  await expect(page.getByText("CVV is required")).toBeVisible();
  await expect(page.getByText("Name is required")).toBeVisible();

  await page.getByLabel("Card number").fill("555559999999999999");
  await page.getByLabel("Expires").fill("10/10");
  await page.getByLabel("Security Code").fill("444");
  await page.getByLabel("Name on card").fill("Bob G");
  await page.getByLabel("Zip code").fill("12345");

  // Date is in the past, expiry should still be errored out
  await expect(page.getByText("Expiry expected to be MM/YY,")).toBeVisible();

  // On blur, validation error should disappear
  await page.getByLabel("Expires").fill("10/25");
  await page.getByLabel("Expires").press("Tab");
  await expect(
    page.getByText("Expiry expected to be MM/YY,"),
  ).not.toBeVisible();

  // Successfully proceeds to next step
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(
    page.getByRole("heading", { name: "Review and pay" }),
  ).toBeVisible();
});
