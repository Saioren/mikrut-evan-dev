import { useGlobals } from '@/providers/GlobalsProvider'
import { ProjectCollection } from '@/types/Collections/Projects'
import React from 'react'

const ProjectsComponent = () => {
  const { projectsArray } = useGlobals()

  return <div>ProjectsComponent</div>
}

export default ProjectsComponent
