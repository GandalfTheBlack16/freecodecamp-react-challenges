import DrumButton from './DrumButton'
import { KEY_MAP } from './utils'
import './DrumMachine.css'

function DrumMachine () {
  return (
    <div>
      <h1>Drum machine</h1>
      <div id='drum-machine'>
        <div className='drum-buttons'>
          {
            KEY_MAP.map(item => {
              return (
                <DrumButton
                  key={item.value}
                  keyValue={item.value}
                  placeholder={item.key}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default DrumMachine
