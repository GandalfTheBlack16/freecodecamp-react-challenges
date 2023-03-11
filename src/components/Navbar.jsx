import './Navbar.css'

export default function Navbar ({ selected }) {
  return (
    <nav className='app__navbar'>
      <span className='navbar__title'>FreecodeCamp React Challenges</span>
      <div className='navbar__sections'>
        <div>
          <a href='/quotes'>Quotes Machine</a>
        </div>
        <div>
          <a href='/markdown'>Markdown previewer</a>
        </div>
        <div>
          <a href='/calculator'>Javascript calculator</a>
        </div>
        <div>
          <a href='/clock'>25/5 Clock</a>
        </div>
      </div>
    </nav>
  )
}
