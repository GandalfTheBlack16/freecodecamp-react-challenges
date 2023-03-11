import { useEffect, useState } from 'react'
import { ROUTES } from '../app-routes'

export default function useNavigation () {
  const { path: intialPath, component: intialComponent } = ROUTES.at(0)
  const [currentPath, setCurrentPath] = useState(intialPath)
  const [currentComponent, setCurrentComponent] = useState(intialComponent)

  useEffect(() => {
    const pathname = window.location.pathname
    let notFound = true
    ROUTES.forEach((route) => {
      const { path, component } = route
      if (path === pathname) {
        setCurrentPath(path)
        setCurrentComponent(component)
        notFound = false
      }
    })
    if (notFound) {
      setCurrentPath(intialPath)
      setCurrentComponent(intialComponent)
    }
  }, [window.location.pathname])

  return {
    currentPath,
    currentComponent
  }
}
