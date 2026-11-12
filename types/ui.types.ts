// types/ui.types.ts
import type { Page } from '@playwright/test'

export type Role = Parameters<Page['getByRole']>[0]