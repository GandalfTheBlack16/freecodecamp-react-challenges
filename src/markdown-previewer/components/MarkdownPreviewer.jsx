import useContent from '../hooks/useContent'
import Editor from './Editor'
import Preview from './Preview'
import './MarkdownPreviewer.css'
import { INITIAL_TEXT } from '../utils/constants'

export default function MarkdownPreviewer () {
  const { content, parsedContent, onContentChange } = useContent(INITIAL_TEXT)

  return (
    <div>
      <h1>Markdown previewer</h1>
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
