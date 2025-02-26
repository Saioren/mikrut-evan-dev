import Meta from '@/components/Meta'
import Blocks from '@/layout/Blocks'
import { Hero } from '@/layout/Hero'
import { PageType } from '@/types/Layout/Page/types'
import { GetStaticProps } from 'next'
import React from 'react'
import { Projects } from '@/types/Blocks/Projects'
import { fetchPageData } from '@/requests'

const ProjectsPage: React.FC<PageType & { globals: any; projects: Projects }> = ({
  layout,
  hero,
  meta,
}) => {
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
  const pageData = await fetchPageData('projects');

  return {
    props: {
      ...pageData,
    },
    revalidate: 10,
  }
}

export default ProjectsPage
