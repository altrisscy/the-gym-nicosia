import content from '@/content.json'

export type ContentRow = Record<string, string>

export function rows(page: keyof typeof content, type: string): ContentRow[] {
  return (content[page] as ContentRow[]).filter((row) => row.type === type)
}

export function copy(page: keyof typeof content): ContentRow {
  return rows(page, 'copy')[0] ?? {}
}
