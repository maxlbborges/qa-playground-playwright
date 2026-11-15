import { BasePage } from "@pages/base.page"
import { test } from "@fixtures/testingPlaygroundFixtures"

export enum DynamicIDPageStrings {
    title = 'Dynamic ID',
    scenario = 'Scenario',
    playground = 'Playground',
    buttonLabel = 'Button with Dynamic ID'
}

export class DynamicIDPage extends BasePage {
    path = '/dynamicid'

    public async verifyPage() {
        await test.step("Verifying the Dynamic ID page elements", async () => {
            await this.verifyPageElements()
        })
        await test.step("Verifying the Dynamic ID page URL", async () => {
            await this.actions.clickElement({ elementName: DynamicIDPageStrings.buttonLabel, elementRole: 'button' })
        })
    }

    private async verifyPageElements() {
        await this.actions.validateTextInElement({ elementName: DynamicIDPageStrings.title, elementRole: 'heading', expectedText: DynamicIDPageStrings.title })
        await this.actions.validateTextInElement({ elementName: DynamicIDPageStrings.scenario, elementRole: 'heading', expectedText: DynamicIDPageStrings.scenario })
        await this.actions.validateTextInElement({ elementName: DynamicIDPageStrings.playground, elementRole: 'heading', expectedText: DynamicIDPageStrings.playground })
        await this.actions.validateTextInElement({ elementName: DynamicIDPageStrings.buttonLabel, elementRole: 'button', expectedText: DynamicIDPageStrings.buttonLabel })
    }
    
}