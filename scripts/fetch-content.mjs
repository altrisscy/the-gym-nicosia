import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const endpoint = process.env.VITE_CONTENT_ENDPOINT
if (!endpoint) {
  console.log('VITE_CONTENT_ENDPOINT is not set; using seeded src/content.json')
  process.exit(0)
}

const response = await fetch(endpoint, { redirect: 'follow' })
if (!response.ok) throw new Error(`Content fetch failed: ${response.status}`)
const data = await response.json()
for (const page of ['home', 'menu', 'about', 'reservations']) {
  if (!Array.isArray(data[page])) throw new Error(`Missing or invalid sheet tab: ${page}`)
}

const here = path.dirname(fileURLToPath(import.meta.url))
await writeFile(path.resolve(here, '../src/content.json'), `${JSON.stringify(data, null, 2)}\n`)
console.log('Content synced from Google Sheets')
