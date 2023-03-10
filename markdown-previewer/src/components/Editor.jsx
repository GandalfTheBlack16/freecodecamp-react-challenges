
export default function Editor ({ content, onContentChange }) {
  return (
        <div className="editor-wrapper">
            <div className="toolbar">
                <span>Editor</span>
            </div>
            <textarea
                id="editor"
                value={content}
                onChange={onContentChange}>
            </textarea>
        </div>
  )
}
