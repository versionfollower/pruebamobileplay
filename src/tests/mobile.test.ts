import { expect } from '@playwright/test';
import { fixtures as test } from '../fixture';

test.describe('Android emulator Test Suite', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test("should have page heading", async ({ landingPage }) => {
        await expect(landingPage.pageHeading).toHaveText('Free and open-source eCommerce platform')
    })

    test("Should be able to navigate to all features page", async ({ landingPage, page }) => {
        landingPage.clickOnFeaturesBUtton()
        await expect(page).toHaveURL(/.*features/)
    })

    test("Should have all list of features displayed", async ({ landingPage, page }) => {
        await page.goto('/features')
        await expect.soft(landingPage.linkText('Multi-store')).toBeVisible()
        await expect.soft(landingPage.linkText('Mobile Commerce')).toBeVisible()
        await expect.soft(landingPage.linkText('Multi-vendor')).toBeVisible()
    })

});
