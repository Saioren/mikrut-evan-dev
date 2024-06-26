import { Project as ProjectCollectionType } from '@/types/Blocks/Projects'
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

    if (project.projectImage) {
      formattedImage = project.projectImage
    } else if (theme === 'dark') {
      formattedImage = project.projectImageDark || project.projectImageLight
    } else {
      formattedImage = project.projectImageLight || project.projectImageDark
    }

    setDarkImage(formattedImage)
  }, [theme, project])

  console.log(darkImage)

  return (
    <div id={project.projectUrl} className={classes.project}>
      <div className={classes.projectInfo}>
        <h2 className={classes.projectHeader}>{project?.projectName}</h2>
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

      <div className={classes.projectInfo2}>
        <p>{project?.projectTeaser}</p>
      </div>
    </div>
  )
}

export default Project
