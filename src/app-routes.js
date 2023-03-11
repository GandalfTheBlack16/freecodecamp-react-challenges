import MainComponent from './components/MainComponent'
import QuotesMachine from './random-quotes-machine/components/QuotesMachine'
import MarkdownPreviewer from './markdown-previewer/components/MarkdownPreviewer'
import Calculator from './javascript-calculator/components/Calculator'
import Timer from './25-5_clock/components/Timer'

export const ROUTES = [
  { path: '/', component: MainComponent },
  { path: '/quotes', component: QuotesMachine },
  { path: '/markdown', component: MarkdownPreviewer },
  { path: '/calculator', component: Calculator },
  { path: '/clock', component: Timer }
]
