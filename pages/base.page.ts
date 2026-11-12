export class BasePage {
    readonly url: string
    readonly title: string
    readonly description: string

    constructor() {
        this.url = "",
        this.title = "",
        this.description = ""
    }
}