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
  children: ReactNode
}

export const GlobalsProvider: React.FC<GlobalsProviderProps> = ({ children }) => {
  const [skills, setSkills] = useState<SkillCollection[]>([])
  const [projectsArray, setProjects] = useState<ProjectCollection[]>([])
  const [footer, setFooter] = useState<Footer>() // Initialize with null or appropriate initial state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [skillsResponse, projectsResponse, footerResponse] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skillsCollection`).then((res) =>
            res.json(),
          ),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`).then((res) => res.json()),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/globals/footer?depth=1&draft=false`).then(
            (res) => res.json(),
          ),
        ])

        setSkills(skillsResponse.docs)
        setProjects(projectsResponse.docs)
        setFooter(footerResponse)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <GlobalsContext.Provider
      value={{ footer, projectsArray: { docs: projectsArray }, skills: { docs: skills } }}
    >
      {children}
    </GlobalsContext.Provider>
  )
}
