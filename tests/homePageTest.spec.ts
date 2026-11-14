import { test } from '@fixtures/homePageFixture'
import { HomePageLinks } from '@pages/HomePage/home.page'

for (const link of Object.values(HomePageLinks)) {
  test(`Home page link navigates to "${link}"`, async ({ homePage }) => {
    await homePage.verifyLink(link)
  })
}

