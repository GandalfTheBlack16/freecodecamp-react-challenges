import MarkdownPreviewer from './markdown-previewer/components/MarkdownPreviewer'
import QuotesMachine from './random-quotes-machine/components/QuotesMachine'
import Footer from './shared/components/Footer'
import './App.css'

function App () {
  return (
    <div className='App'>
      <h1>FreecodeCamp React Challenges</h1>
      <MarkdownPreviewer />
      <QuotesMachine />
      <Footer />
    </div>
  )
}

export default App
