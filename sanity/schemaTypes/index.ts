import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './productTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
