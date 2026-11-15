import {test as base} from '@playwright/test'
import { HomePage } from '@pages/HomePage/home.page'
import { DynamicIDPage } from '@pages/DynamicIDPage/dynamicId.page'

type TestingPlaygroundFixtures = {
    homePage: HomePage,
    dynamicIDPage: DynamicIDPage
}

export const test = base.extend<TestingPlaygroundFixtures>({
    homePage: async ({page}, use) => {
        const homePage = new HomePage(page)
        await homePage.navigate()
        await use(homePage)
    },

    dynamicIDPage: async ({page}, use) => {
        const homePage = new HomePage(page)
        const dynamicIDPage = new DynamicIDPage(page)
        await homePage.navigate()
        await homePage.actions.clickElement({ elementName: 'Dynamic ID', elementRole: 'link' })
        await use(dynamicIDPage)
    }
})

