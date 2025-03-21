import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './productTypes'
import { orderType } from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, orderType],
}
