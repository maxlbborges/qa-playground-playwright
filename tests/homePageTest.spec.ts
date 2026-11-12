import { test} from '@playwright/test'
import { HomePage } from '@pages/HomePage/home.page'

// TODO: Import test/expect from a fixtures file (e.g. '../fixtures') once page objects exist
test('Testing Home Page Links - Clicking the Dynamic ID link', async ({ page }) => {

  const homePage = new HomePage(page)

  await homePage.navigate()
  await homePage.actions.clickElement({ elementName: 'Dynamic ID', elementRole: 'link' })
  await homePage.actions.validateTextInElement({ elementName: 'Dynamic ID', elementRole: 'heading', expectedText: 'Dynamic ID' })

})
