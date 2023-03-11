import useCalculator from '../hooks/useCalculator'
import Key from './Key'
import { keyMap } from '../../shared/utils/constants'
import './Calculator.css'

export default function Calculator () {
  const { displayContent, handle } = useCalculator()

  return (
    <div className='wrapper'>
      <div id='display'>{displayContent}</div>
      {keyMap.map(item => {
        return (
          <Key
            id={item.id}
            key={item.id}
            number={item.number}
            handleClick={handle(item.handler)}
          />
        )
      })}
    </div>
  )
}
