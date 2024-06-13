import Meta from '@/components/Meta'
import Blocks from '@/layout/Blocks'
import { Hero } from '@/layout/Hero'
import { fetchPageData, getAllGlobals } from '@/requests'
import { PageType } from '@/types/Layout/Page/types'
import { GetStaticProps } from 'next'
import React from 'react'
import classes from '../index.module.scss'
import { ProjectCollection } from '@/types/Collections/Projects'
import ProjectsComponent from '@/components/ProjectsComponent'

const ProjectsPage: React.FC<PageType & { globals: any; projects: ProjectCollection }> = ({
  layout,
  hero,
  meta,
  globals,
}) => {
  return (
    <main>
      <Meta {...meta} />
      <div id="page-content" className={classes.pageContent}>
        <Hero {...hero} />
        <ProjectsComponent />
        {/*<Blocks blocks={layout} />*/}
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [pageData, globals] = await Promise.all([fetchPageData('projects'), getAllGlobals()])
  return {
    props: {
      ...pageData,
      globals,
    },
  }
}

export default ProjectsPage
