import { expect, type Page } from '@playwright/test'
import { Role } from '../types/ui.types'

export class GeneralActions {
    constructor(private readonly page: Page) {}

    async clickElement({ elementName, elementRole }: { elementName: string, elementRole?: Role }) {
        if (elementRole) {
            console.log(`Clicking element with role: ${elementRole} and name: ${elementName}`)
            await expect(this.page.getByRole(elementRole, { name: elementName })).toBeVisible()
            await this.page.getByRole(elementRole, { name: elementName }).click()
        } else {
            console.log(`Clicking element with name: ${elementName}`)
            await expect(this.page.getByText(elementName)).toBeVisible()
            await this.page.getByText(elementName).click()
        }
        
    }
}   