import { GetStaticProps } from 'next'
import { fetchPageData, /*getAllCollections,*/ getAllGlobals } from '@/requests'
import { Hero } from '@/layout/Hero'
import Blocks from '@/layout/Blocks'
import Meta from '@/components/Meta'
import { PageType } from '@/types/Layout/Page/types'
import classes from './index.module.scss'
import BackgroundColors from '@/components/BackgroundColors'

const HomePage: React.FC<PageType & { globals: any }> = ({ layout, hero, meta, globals }) => {
  return (
    <main>
      <Meta {...meta} />
      <BackgroundColors />
      <div id="page-content" className={classes.pageContent}>
        <Hero {...hero} />
        <Blocks blocks={layout} />
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [pageData, globals /*skillsCollection*/] = await Promise.all([
    fetchPageData('home'),
    getAllGlobals(),
    //getAllCollections(),
  ])
  return {
    props: {
      ...pageData,
      globals,
      //skillsCollection,
    },
  }
}

export default HomePage
