import { GetStaticProps } from 'next'
import { fetchPageData, getAllGlobals } from '@/requests'
import { Hero } from '@/layout/Hero'
import Blocks from '@/layout/Blocks'
import Meta from '@/components/Meta'
import { PageType } from '@/types/Layout/Page/types'
import classes from './index.module.scss'
import { SkillsArray } from '@/types/Blocks/Skills/types'

const HomePage: React.FC<PageType & { globals: any }> = ({ layout, hero, meta, globals }) => {
  return (
    <main>
      <Meta {...meta} />
      <div id="page-content" className={classes.pageContent}>
        <Hero {...hero} />
        <Blocks blocks={layout} />
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [pageData, globals] = await Promise.all([fetchPageData('home'), getAllGlobals()])
  return {
    props: {
      ...pageData,
      globals,
    },
  }
}

export default HomePage
