import QuoteBox from './QuoteBox'
import Footer from '../../shared/components/Footer'
import './Quotes.css'

export default function QuotesMachine () {
  return (
    <div className='quotes__wrapper'>
      <h2>Random Quotes Machine</h2>
      <QuoteBox />
      <Footer />
    </div>
  )
}
