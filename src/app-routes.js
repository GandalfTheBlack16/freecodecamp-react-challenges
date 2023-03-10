import MainComponent from './components/MainComponent'
import QuotesMachine from './random-quotes-machine/components/QuotesMachine'
import MarkdownPreviewer from './markdown-previewer/components/MarkdownPreviewer'
import Calculator from './javascript-calculator/components/Calculator'
import Timer from './25-5_clock/components/Timer'

export const ROUTES = [
  { id: 0, path: '/', Component: MainComponent },
  { id: 1, path: '/quotes', Component: QuotesMachine },
  { id: 2, path: '/markdown', Component: MarkdownPreviewer },
  { id: 3, path: '/calculator', Component: Calculator },
  { id: 4, path: '/clock', Component: Timer }
]
