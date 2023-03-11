import Footer from './components/Footer'
import './App.css'
import Navbar from './components/Navbar'
import useNavigation from './hooks/useNavigation'

function App () {
  const { currentPath, currentComponent: CurrentComponent } = useNavigation()

  return (
    <div className='App'>
      <Navbar
        selected={currentPath}
      />
      <CurrentComponent />
      <Footer />
    </div>
  )
}

export default App
