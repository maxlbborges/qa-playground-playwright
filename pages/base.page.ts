import { GeneralActions } from "@actions/generalActions"
import { Page } from "@playwright/test"

export abstract class BasePage {
    abstract readonly path: string
    readonly actions: GeneralActions

    constructor(private readonly page: Page) {
        this.actions = new GeneralActions(page)
    }

    async navigate() {
        await this.page.goto(this.path)
    }

}