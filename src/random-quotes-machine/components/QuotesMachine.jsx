import QuoteBox from './QuoteBox'
import './Quotes.css'

export default function QuotesMachine () {
  return (
    <div className='quotes__wrapper'>
      <h2>Random Quotes Machine</h2>
      <QuoteBox />
    </div>
  )
}
