import { createClient } from 'next-sanity'

export const client = createClient({
  apiVersion: '2024-03-30',
  projectId: '0sms5lnz',
  dataset: 'production',
  useCdn: false,
})
