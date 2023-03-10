import { useState } from "react";
import { parse } from 'marked';

export default function useContent(intialContent) {

    const [ content, setContent ] = useState(intialContent || '')

    const parsedContent = parse(content);

    return {
        content,
        parsedContent,
        onContentChange: (event) => setContent(event.target.value)
    }
}