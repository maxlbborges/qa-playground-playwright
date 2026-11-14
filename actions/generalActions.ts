import test, { expect, type Page } from '@playwright/test'
import { Role } from '../types/ui.types'

export class GeneralActions {
    constructor(private readonly page: Page) {}

    /**
    * Turns the process of awaiting for an element to be visible and clicks it using exact matching (TODO: implement params for clicks!).
    * @param elementName - The name of the element to click
    * @param elementRole - The role of the element to click (Optional)
    */
    async clickElement({ elementName, elementRole }: { elementName: string, elementRole?: Role }) {
        elementRole
            ? await test.step(`Clicking element with role: ${elementRole} and name: ${elementName}`, async () => {
                await this.page.getByRole(elementRole, { name: elementName, exact: true }).click()
            })
            : await test.step(`Clicking element with name: ${elementName}`, async () => {
                await this.page.getByText(elementName, { exact: true }).click()
            })
        
    }

    /**
    * Validates the text in a given element using exact matching (TODO: implement params for validation!).
    * @param elementName - The name of the element to validate
    * @param elementRole - The role of the element to validate (Optional)
    * @param expectedText - The expected text to validate against
    */
    async validateTextInElement({ elementName, elementRole, expectedText }: { elementName: string, elementRole?: Role, expectedText: string }) {
        elementRole
            ? await test.step(`Validating text in element with role ${elementRole} and name ${elementName}`, async () => {
                const element = this.page.getByRole(elementRole, { name: elementName, exact: true })
                await expect(element).toHaveText(expectedText)

            })
            : await test.step(`Validating text in element with name ${elementName}`, async () => {
                const element = this.page.getByText(elementName, { exact: true })
                await expect(element).toHaveText(expectedText)
            })
    }
}   