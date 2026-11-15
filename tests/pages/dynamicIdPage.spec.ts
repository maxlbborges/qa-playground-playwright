import { test } from '@fixtures/testingPlaygroundFixtures'

test('Verify that the Dynamic ID button is clickable', async ({ dynamicIDPage }) => {
    await dynamicIDPage.verifyPage()
})