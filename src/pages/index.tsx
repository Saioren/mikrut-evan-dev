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
  const pageData = await fetchPageData('home')
  return {
    props: {
      ...pageData,
    },
  }
}

export default HomePage
