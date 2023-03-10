
export default function Preview ({ content }) {
  return (
        <div className="preview-wrapper">
            <div className="toolbar">
                <span>Preview</span>
            </div>
            <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: content }}
            >
            </div>
        </div>
  )
}
