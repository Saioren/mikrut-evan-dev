import { Project as ProjectCollectionType } from '@/types/Blocks/Projects'
import { Link } from '@/types/Fields/Link/types'
import { RichText as RichTextType } from '@/types/Fields/RichText/types'
import React from 'react'
import { RichText } from '../RichText'
import Project from './Project'
import { Cell, Grid } from '@faceless-ui/css-grid'
import classes from './index.module.scss'
import { useWindowInfo } from '@faceless-ui/window-info'
import FadeIn from '../FadeIn'
import PopOut from '../PopOut'

export type ProjectsDisplay = {
  projects?: {
    firstProjectsContent: {
      heading: 'string'
      content?: {
        richText?: RichTextType
        links?: Link[]
      }
    }
    projectsField: ProjectCollectionType[]
  }
  order: number
}

const ProjectsDisplay: React.FC<ProjectsDisplay> = (props) => {
  const { projects, order } = props
  const { height } = useWindowInfo()

  return (
    <Grid className={classes.grid}>
      {order % 2 !== 0 ? (
        <React.Fragment>
          <Cell cols={6} colsM={4} colsS={9}>
            <section className={classes.projectHeading}>
              <FadeIn order={0}>
                <h3>{projects?.firstProjectsContent?.heading}</h3>
                <RichText content={projects?.firstProjectsContent?.content?.richText} />
              </FadeIn>
            </section>
          </Cell>

          <Cell className={classes.projectsCell} cols={8} colsM={5} colsS={9}>
            {projects?.projectsField.map((project) => (
              <React.Fragment key={project.id}>
                <FadeIn order={1}>
                  <PopOut animate wait={3}>
                    <Project project={project} />
                  </PopOut>
                </FadeIn>
              </React.Fragment>
            ))}
          </Cell>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Cell className={classes.smallCell} cols={6} colsM={4} colsS={9}>
            <section className={classes.projectHeading}>
              <FadeIn order={0}>
                <h3>{projects?.firstProjectsContent?.heading}</h3>
                <RichText content={projects?.firstProjectsContent?.content?.richText} />
              </FadeIn>
            </section>
          </Cell>
          <Cell className={classes.projectsCell} cols={8} colsM={5} colsS={9}>
            {projects?.projectsField.map((project) => (
              <React.Fragment key={project.id}>
                <FadeIn order={1}>
                  <PopOut animate wait={3}>
                    <Project project={project} />
                  </PopOut>
                </FadeIn>
              </React.Fragment>
            ))}
          </Cell>
          <Cell className={classes.largeCell} cols={6} colsM={4} colsS={9}>
            <section className={classes.projectHeading}>
              <FadeIn order={0}>
                <h3>{projects?.firstProjectsContent?.heading}</h3>
                <RichText content={projects?.firstProjectsContent?.content?.richText} />
              </FadeIn>
            </section>
          </Cell>
        </React.Fragment>
      )}
    </Grid>
  )
}

export default ProjectsDisplay
