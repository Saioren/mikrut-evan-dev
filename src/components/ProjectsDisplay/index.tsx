import { Project as ProjectCollectionType } from '@/types/Collections/Projects'
import { ImageLink } from '@/types/Fields/ImageLink/types'
import { Link } from '@/types/Fields/Link/types'
import { RichText as RichTextType } from '@/types/Fields/RichText/types'
import React from 'react'
import { RichText } from '../RichText'
import Project from './Project'
import { Cell, Grid } from '@faceless-ui/css-grid'
import classes from './index.module.scss'
import { useWindowInfo } from '@faceless-ui/window-info'

type ProjectsDisplay = {
  projects?: ProjectCollectionType[]
  content?: {
    heading?: string
    content?: {
      richText?: RichTextType
      links?: Link[]
      imageLinks?: ImageLink[]
    }
  }
  order: number
}

const ProjectsDisplay: React.FC<ProjectsDisplay> = (props) => {
  const { projects, content, order } = props
  const { height } = useWindowInfo()

  return order % 2 !== 0 ? (
    <React.Fragment>
      <Cell cols={6} colsM={4} colsS={9}>
        {content?.heading}
        <RichText content={content?.content?.richText} />
      </Cell>
      <Cell className={classes.projectsCell} cols={8} colsM={5} colsS={9}>
        {projects?.map((project) => (
          <React.Fragment>
            <Project project={project} />
          </React.Fragment>
        ))}
      </Cell>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Cell className={classes.projectsCell} cols={8} colsM={5} colsS={9}>
        {projects?.map((project) => (
          <React.Fragment>
            <Project project={project} />
          </React.Fragment>
        ))}
      </Cell>
      <Cell cols={6} colsM={4} colsS={9}>
        {content?.heading}
        <RichText content={content?.content?.richText} />
      </Cell>
    </React.Fragment>
  )
}

export default ProjectsDisplay
