import QuoteBox from './QuoteBox'
import Footer from '../../shared/components/Footer'
import './Quotes.css'

export default function QuotesMachine () {
  return (
    <div className='quotes__wrapper'>
      <QuoteBox />
      <Footer />
    </div>
  )
}
