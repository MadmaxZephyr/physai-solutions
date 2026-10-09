import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'physai-website-ixmmozyd',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_erpRVvffHdeJztiQjWkoZGOrLpyIdyog',
  authRequired: false,
  auth: { mode: 'managed' },
})
