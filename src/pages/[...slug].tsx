import Meta from '@/components/Meta'
import Blocks from '@/layout/Blocks'
import { Hero } from '@/layout/Hero'
import { Page as PageType } from '@/types/Page/types'
import { getAllGlobals } from '@/requests'
import { revalidationRate } from '@/revalidationRate'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router' // Corrected the import from 'next/navigation' to 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React, { Fragment, useEffect, useState } from 'react'

type Doc = {
  url: string
  isPasswordProtected?: boolean
  id?: string
  subsite?: string
}

const Page: React.FC<PageType & { preview?: boolean; passwordSuccess?: boolean }> = (props) => {
  const [pageProps, setPageProps] = useState(props)

  useEffect(() => {
    // needed for nextjs fallbacks
    setPageProps(props)
  }, [props])

  const { id, layout, hero, meta = {}, isPasswordProtected, passwordSuccess } = pageProps
  const { isFallback } = useRouter() // Corrected the useRouter import

  return (
    <main>
      {isFallback && <Hero type="standard" />}
      {!isFallback && (!isPasswordProtected || passwordSuccess) && (
        <Fragment>
          <Meta {...meta} />
          <div id="page-content">
            <Hero {...hero} />
            <Blocks blocks={layout} />
          </div>
        </Fragment>
      )}
    </main>
  )
}

export default Page

interface IParams extends ParsedUrlQuery {
  slug: string[]
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { preview, previewData, params } = context
  const { payloadToken } = (previewData as { payloadToken: string }) || {}

  let { slug } = (params as IParams) || {}
  if (!slug) slug = ['home']

  let doc: Doc = {}
  let notFound = false

  const lastSlug = slug[slug.length - 1].toLowerCase()

  const pageReq = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/pages?where[slug][equals]=${lastSlug}&depth=2&draft=true`,
    {
      headers: {
        ...(preview ? { Authorization: `JWT ${payloadToken}` } : {}),
      },
    },
  )

  if (pageReq.ok) {
    const pageData = await pageReq.json()
    const { docs } = pageData

    if (docs.length > 0) {
      const foundDoc = docs.find((doc: Doc) => {
        const slugChain = `/${slug.map((theSlug) => theSlug.toLowerCase()).join('/')}`
        return doc.url === slugChain
      })

      if (foundDoc) {
        if (!foundDoc.isPasswordProtected) {
          doc = foundDoc
        } else {
          doc = {
            ...foundDoc, // Spread the foundDoc properties
            url: `/${slug.map((theSlug) => theSlug.toLowerCase()).join('/')}`, // Set the url explicitly
          }
        }
      } else {
        notFound = true
      }
    } else {
      notFound = true
    }
  } else {
    notFound = true
  }

  if (Object.keys(doc).length === 0) {
    return {
      notFound: true,
      props: {},
    }
  }

  const globals = await getAllGlobals()

  return {
    props: {
      ...doc,
      globals,
      preview: preview || null,
      collection: 'pages',
    },
    notFound,
    revalidate: revalidationRate,
  }
}

type Path = {
  params: {
    slug: string[]
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: Path[] = []

  const pagesReq = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/pages?where[_status][equals]=published&depth=0&limit=300`,
  )
  const pagesData = await pagesReq.json()

  if (pagesReq.ok) {
    const { docs: pages } = pagesData

    if (pages && Array.isArray(pages) && pages.length > 0) {
      paths = pages.map((page: Doc) => {
        const slugs = page.url.split('/').filter((slug) => slug)
        return { params: { slug: slugs } }
      })
    }
  }

  return {
    paths,
    fallback: 'blocking',
  }
}
