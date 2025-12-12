import { StringKeyOf, TypedCollection } from 'payload'
import { generatePreviewPath } from './generatePreviewPath'
import { getServerSideURL } from './getURL'

export const generatePreviewURL = (data: any, collection: StringKeyOf<TypedCollection>) => {
  const path = generatePreviewPath({
    slug: typeof data?.slug === 'string' ? data.slug : '',
    collection,
  })

  return `${getServerSideURL()}${path}`
}
