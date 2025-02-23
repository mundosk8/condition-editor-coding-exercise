import { test, expect } from '@playwright/test';

test.describe('Filtering', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have all 6 products when no filter is applied', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Clear' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Headphones' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Cell Phone' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Keyboard' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Cup' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Key', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Hammer' })).toBeVisible();
  })

  test('should show the products that match the filter applied ', async ({ page }) => {
    await page.locator('select[name="property-names"]').selectOption('2');
    await page.locator('select[name="operators"]').selectOption('equals');
    await page.locator('#property-value-text').fill('1');

    await expect(page.getByRole('cell', { name: 'Headphones' })).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'Cell Phone' })).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'Keyboard' })).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'Cup' })).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'Key', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Hammer' })).not.toBeVisible();
  })
})
