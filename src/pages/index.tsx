import { GetStaticProps } from 'next'
import { fetchPageData } from '@/requests'
import { Hero } from '@/layout/Hero'
import Blocks from '@/layout/Blocks'
import Meta from '@/components/Meta'
import { PageType } from '@/types/Layout/Page/types'

const HomePage: React.FC<PageType & { globals: any }> = ({ layout, hero, meta }) => {
  // Dynamically set seoTitle based on hero.header
  const seoTitle = hero?.standardHero?.heading || hero?.projectsHero?.heading || meta?.title

  return (
    <main>
      <Meta {...meta} seoTitle={seoTitle} /> {/* Pass seoTitle here */}
      <div id="page-content">
        <Hero {...hero} />
        <Blocks blocks={layout} />
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await fetchPageData('home');
  return {
    props: {
      ...pageData,
    },
    revalidate: 10,
  }
}

export default HomePage
