import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { Footer } from '@/types/Layout/Footer/types'
import { SkillCollection } from '@/types/Blocks/Skills/types'
import { ProjectCollection } from '@/types/Collections/Projects'

export interface IGlobals {
  globals: {
    footer: Footer
  }
  footer: Footer
  skills: {
    docs: SkillCollection[]
  }
  projectsArray: {
    docs: ProjectCollection[]
  }
}

export const GlobalsContext = createContext<IGlobals>({} as IGlobals)
export const useGlobals = (): IGlobals => useContext(GlobalsContext)

interface GlobalsProviderProps {
  globals: {
    footer: Footer
  }
  skills?: SkillCollection[]
  projectsArray?: ProjectCollection[]
  children: ReactNode
}

export const GlobalsProvider: React.FC<GlobalsProviderProps> = ({ globals, children }) => {
  const footer = globals.footer
  const [skills, setSkills] = useState([])
  const [projectsArray, setProjects] = useState([])

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/skillsCollection`,
        )
        const skillsData = await skillsResponse.json()
        setSkills(skillsData)
      } catch (error) {
        console.error('Error fetching skills:', error)
      }
    }

    const fetchProjects = async () => {
      try {
        const projectsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`)
        const projectsData = await projectsResponse.json()
        setProjects(projectsData)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }

    fetchSkills()
    fetchProjects()
  }, [])

  return (
    <GlobalsContext.Provider value={{ globals, footer, projectsArray, skills }}>
      {children}
    </GlobalsContext.Provider>
  )
}
