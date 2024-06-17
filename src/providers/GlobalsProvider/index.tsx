import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { Footer } from '@/types/Layout/Footer/types'
import { SkillCollection } from '@/types/Blocks/Skills/types'
import { ProjectCollection } from '@/types/Collections/Projects'

export interface IGlobals {
  footer?: Footer
  skills?: {
    docs: SkillCollection[]
  }
  projectsArray?: {
    docs: ProjectCollection[]
  }
}

export const GlobalsContext = createContext<IGlobals>({} as IGlobals)
export const useGlobals = (): IGlobals => useContext(GlobalsContext)

interface GlobalsProviderProps {
  footer?: Footer
  skills?: SkillCollection[]
  projectsArray?: ProjectCollection[]
  children: ReactNode
}

export const GlobalsProvider: React.FC<GlobalsProviderProps> = ({ children }) => {
  const [skills, setSkills] = useState([])
  const [projectsArray, setProjects] = useState([])
  const [footer, setFooter] = useState<Footer>() // Initialize with null or appropriate initial state

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

    const fetchFooter = async () => {
      try {
        const footerResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/globals/footer?depth=1&draft=false`,
        )
        const footerData = await footerResponse.json()
        setFooter(footerData) // Ensure footerData matches the structure of Footer
      } catch (error) {
        console.error('Error fetching footer:', error)
      }
    }

    fetchSkills()
    fetchProjects()
    fetchFooter()
  }, [])

  return (
    <GlobalsContext.Provider value={{ footer, projectsArray, skills }}>
      {children}
    </GlobalsContext.Provider>
  )
}
