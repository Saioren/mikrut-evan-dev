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
      <div className={classes.projectInfo}>
        <h2 className={classes.projectHeader}>{project?.projectsField.projectName}</h2>
      </div>

      {/*<p>{project?.projectsField.projectDescription}</p>*/}
      <Image
        className={classes.projectImage}
        src={project.projectsField.projectImage.url}
        alt={project.projectsField.projectImage.alt}
        height={project.projectsField.projectImage.height}
        width={project.projectsField.projectImage.width}
      />
      <div className={classes.projectInfo}>
        <p>{project?.projectsField.projectTeaser}</p>
      </div>
    </div>
  )
}

export default Project
