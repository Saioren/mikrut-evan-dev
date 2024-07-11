import { GetStaticProps } from 'next'
import { fetchPageData } from '@/requests'
import { Hero } from '@/layout/Hero'
import Blocks from '@/layout/Blocks'
import Meta from '@/components/Meta'
import { PageType } from '@/types/Layout/Page/types'

const HomePage: React.FC<PageType & { globals: any }> = ({ layout, hero, meta }) => {
  return (
    <main>
      <Meta {...meta} />
      <div id="page-content">
        <Hero {...hero} />
        <Blocks blocks={layout} />
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  /*const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pages?where[slug][equals]=home`);
  const data = await res.json();
  const pageData = data.docs[0];*/
  const pageData = { layout: [ ] };
  return {
    props: {
      ...pageData,
    },
  }
}

export default HomePage
