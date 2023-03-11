import TimerConfig from './TimerConfig'
import useTimer from '../hooks/useTimer'
import { toMMSS, toMinutes } from '../utils/time'
import TimerButtons from './TimerButtons'
import './Timer.css'

const SESSION_DEFAULT_LENGTH = 25
const BREAK_DEFAULT_LENGTH = 5

export default function Timer () {
  const {
    sessionTimer,
    breakTimer,
    incrementSession,
    decrementSession,
    incrementBreak,
    decrementBreak,
    resetTimers,
    currentTimer,
    isRunning,
    time,
    play,
    pause
  } = useTimer({
    initSessionTime: SESSION_DEFAULT_LENGTH * 60,
    initBreakTime: BREAK_DEFAULT_LENGTH * 60
  })

  const capitalizedCurrentTimer = currentTimer.charAt(0).toUpperCase() + currentTimer.slice(1)
  const finalMinClass = time < 60 ? 'final-minute' : ''

  return (
    <div>
      <h2>25/5 Clock</h2>
      <div className='timer__wrapper'>
        <div className='config_container'>
          <TimerConfig
            identifier='session'
            label='Session length'
            timerValue={toMinutes(sessionTimer)}
            onIncrement={incrementSession}
            onDecrement={decrementSession}
            btnDisabledCondition={isRunning}
          />
          <TimerConfig
            identifier='break'
            label='Break length'
            timerValue={toMinutes(breakTimer)}
            onIncrement={incrementBreak}
            onDecrement={decrementBreak}
            btnDisabledCondition={isRunning}
          />
        </div>
        <div className='timer__container'>
          <div className='timer__content'>
            <div>
              <h3 id='timer-label' className={finalMinClass}>{capitalizedCurrentTimer}</h3>
            </div>
            <div id='time-left' className={finalMinClass}>{toMMSS(time)}</div>
          </div>
          <div className='timer__actions'>
            <TimerButtons
              isRunning={isRunning}
              onPlayHandler={play}
              onPauseHandler={pause}
              onResetHandler={resetTimers}
            />
          </div>
        </div>
      </div>

    </div>
  )
}
