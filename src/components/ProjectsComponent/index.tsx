import Padding from '@/layout/Padding'
import { useGlobals } from '@/providers/GlobalsProvider'
import { PaddingOption } from '@/types/Layout/Padding/types'
import React from 'react'
import ProjectsDisplay from '../ProjectsDisplay'
import { Grid } from '@faceless-ui/css-grid'

const ProjectsComponent = () => {
  const { projectsArray } = useGlobals()

  const padding: PaddingOption = {
    paddingTop: 'medium',
    paddingBottom: 'small',
  }

  console.log(projectsArray)

  return (
    <Padding padding={padding}>
      {projectsArray?.docs.map((collection) => {
        return (
          <Grid>
            <ProjectsDisplay
              order={1}
              projects={collection.firstProjects}
              content={collection.firstProjectsContent}
            />
            <ProjectsDisplay
              order={2}
              projects={collection.secondProjects}
              content={collection.secondProjectsContent}
            />
            <ProjectsDisplay
              order={3}
              projects={collection.thirdProjects}
              content={collection.thirdProjectsContent}
            />
          </Grid>
        )
      })}
    </Padding>
  )
}

export default ProjectsComponent
