import { Project as ProjectCollectionType } from '@/types/Collections/Projects'
import Image from 'next/image'
import React from 'react'
import classes from './index.module.scss'

type ProjectType = {
  project: ProjectCollectionType
}

const Project: React.FC<ProjectType> = (props) => {
  const { project } = props
  return (
    <div id={project.projectsField.projectUrl} className={classes.project}>
      <h2>{project?.projectsField.projectName}</h2>

      {/*<p>{project?.projectsField.projectDescription}</p>*/}
      <Image
        className={classes.projectImage}
        src={project.projectsField.projectImage.url}
        alt={project.projectsField.projectImage.alt}
        height={project.projectsField.projectImage.height}
        width={project.projectsField.projectImage.width}
      />
      <p>{project?.projectsField.projectTeaser}</p>
    </div>
  )
}

export default Project
