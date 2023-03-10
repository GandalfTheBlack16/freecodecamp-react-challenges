import './App.css'
import Editor from './components/Editor'
import Preview from './components/Preview'
import useContent from './hooks/useContent'
import { INITIAL_TEXT } from './constants.js';

function App () {

  const { content, parsedContent, onContentChange } = useContent(INITIAL_TEXT);

  return (
    <div>
      <h1>Markdown previewer</h1>
      <h5>by GandalfTheBlack16</h5>
      <main className='wrapper'>
        <Editor 
          onContentChange={onContentChange}
          content={content}
        />
        <Preview 
          content={parsedContent}
        />
      </main>
    </div>
  )
}

export default App
