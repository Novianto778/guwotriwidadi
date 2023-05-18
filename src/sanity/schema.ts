import { type SchemaTypeDefinition } from 'sanity'
import news from './schema/news'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news],
}
