import { Link } from 'midu-router'
import './Navbar.css'

export default function Navbar ({ selected }) {
  return (
    <nav className='app__navbar'>
      <Link
        to='/'
      >
        <span className='navbar__title'>FreecodeCamp React Challenges</span>
      </Link>
      <div className='navbar__sections'>
        <div>
          <Link
            to='/quotes'
          >Quotes Machine
          </Link>
        </div>
        <div>
          <Link
            to='/markdown'
          >Markdown previewer
          </Link>
        </div>
        <div>
          <Link
            to='/calculator'
          >Javascript calculator
          </Link>
        </div>
        <div>
          <Link
            to='/clock'
          >25/5 Clock
          </Link>
        </div>
      </div>
    </nav>
  )
}
