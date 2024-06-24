import { Project as ProjectCollectionType } from '@/types/Collections/Projects'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import classes from './index.module.scss'
import { useTheme } from '@/providers/ThemeContext'
import { Media } from '@/types/Fields/Media/types'

type ProjectType = {
  project: ProjectCollectionType
}

const Project: React.FC<ProjectType> = (props) => {
  const { project } = props
  const { theme } = useTheme()
  const [darkImage, setDarkImage] = useState<Media>()

  useEffect(() => {
    let formattedImage: Media

    if (project.projectsField.projectImage) {
      formattedImage = project.projectsField.projectImage
    } else if (theme === 'dark') {
      formattedImage =
        project.projectsField.projectImageDark || project.projectsField.projectImageLight
    } else {
      formattedImage =
        project.projectsField.projectImageLight || project.projectsField.projectImageDark
    }

    setDarkImage(formattedImage)
  }, [theme, project])

  return (
    <div id={project.projectsField.projectUrl} className={classes.project}>
      <div className={classes.projectInfo}>
        <h2 className={classes.projectHeader}>{project?.projectsField.projectName}</h2>
      </div>

      {darkImage && (
        <Image
          className={classes.projectImage}
          src={darkImage.url}
          alt={darkImage.alt}
          height={darkImage.height}
          width={darkImage.width}
        />
      )}

      <div className={classes.projectInfo}>
        <p>{project?.projectsField.projectTeaser}</p>
      </div>
    </div>
  )
}

export default Project
