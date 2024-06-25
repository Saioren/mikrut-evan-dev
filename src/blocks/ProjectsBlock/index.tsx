import Padding from '@/layout/Padding'
import React from 'react'
import ProjectsDisplay from '../../components/ProjectsDisplay'
import BackgroundColors from '../../components/BackgroundColors'
import { Projects } from '@/types/Blocks/Projects'

const ProjectsBlock: React.FC<Projects> = (props) => {
  const { padding, firstProjects, secondProjects, thirdProjects } = props

  return (
    <Padding padding={padding}>
      <Padding padding={padding}>
        <ProjectsDisplay
          order={1}
          projects={firstProjects?.projectsField}
          content={firstProjects?.firstProjectsContent}
        />
        <BackgroundColors positions={['left', 'bottomRight']} />
      </Padding>
      <Padding padding={padding}>
        <ProjectsDisplay
          order={2}
          projects={secondProjects?.projectsField}
          content={secondProjects?.secondProjectsContent}
        />
        <BackgroundColors positions={['bottomRight']} />
      </Padding>
      <Padding padding={padding}>
        <ProjectsDisplay
          order={3}
          projects={thirdProjects?.projectsField}
          content={thirdProjects?.thirdProjectsContent}
        />
        <BackgroundColors positions={['bottomLeft']} />
      </Padding>
    </Padding>
  )
}

export default ProjectsBlock
