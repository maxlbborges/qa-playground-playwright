import {test as base} from '@playwright/test'
import { HomePage } from '@pages/HomePage/home.page'

type HomePageFixture = {
    homePage: HomePage
}

export const test = base.extend<HomePageFixture>({
    homePage: async ({page}, use) => {
        const homePage = new HomePage(page)
        await homePage.navigate()
        await use(homePage)
    }
})