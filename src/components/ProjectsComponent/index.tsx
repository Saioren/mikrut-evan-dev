import Padding from '@/layout/Padding'
import { useGlobals } from '@/providers/GlobalsProvider'
import { PaddingOption } from '@/types/Layout/Padding/types'
import React from 'react'
import ProjectsDisplay from '../ProjectsDisplay'
import { Grid } from '@faceless-ui/css-grid'
import BackgroundColors from '../BackgroundColors'

const ProjectsComponent = () => {
  const { projectsArray } = useGlobals()

  const padding: PaddingOption = {
    paddingTop: 'large',
    paddingBottom: 'small',
  }

  return (
    <Padding padding={padding}>
      {projectsArray?.docs.map((collection) => {
        return (
          <React.Fragment>
            <Padding padding={padding}>
              <ProjectsDisplay
                order={1}
                projects={collection.firstProjects}
                content={collection.firstProjectsContent}
              />
              <BackgroundColors positions={['left', 'bottomRight']} />
            </Padding>
            <Padding padding={padding}>
              <ProjectsDisplay
                order={2}
                projects={collection.secondProjects}
                content={collection.secondProjectsContent}
              />
              <BackgroundColors positions={['bottomRight']} />
            </Padding>
            <Padding padding={padding}>
              <ProjectsDisplay
                order={3}
                projects={collection.thirdProjects}
                content={collection.thirdProjectsContent}
              />
              <BackgroundColors positions={['bottomLeft']} />
            </Padding>
          </React.Fragment>
        )
      })}
    </Padding>
  )
}

export default ProjectsComponent
