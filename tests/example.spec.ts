import { test, expect } from '@playwright/test';
import { GeneralActions } from '../actions/generalActions';

test('has title', async ({ page }) => {

  const generalActions = new GeneralActions(page);
  
  await page.goto('http://uitestingplayground.com/');
  await generalActions.clickElement({ elementName: 'Dynamic ID', elementRole: 'heading' });

  // Expect a title "to contain" a substring.
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
