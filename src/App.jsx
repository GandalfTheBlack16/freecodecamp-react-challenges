import Footer from './components/Footer'
import './App.css'
import Navbar from './components/Navbar'
import { Router, Route } from 'midu-router'
import { ROUTES } from './app-routes'
import MainComponent from './components/MainComponent'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Router
          routes={ROUTES}
          defaultComponent={MainComponent}
        >
          {
            ROUTES.map(route => {
              return (
                <Route
                  key={route.id}
                  path={route.path}
                  Component={route.component}
                />
              )
            })
          }
        </Router>
      </main>
      <Footer />
    </div>
  )
}

export default App
