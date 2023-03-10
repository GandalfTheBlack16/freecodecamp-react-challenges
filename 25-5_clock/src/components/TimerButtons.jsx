import { FaPlay, FaPause, FaUndoAlt } from 'react-icons/fa'

export default function TimerButtons ({
  isRunning,
  onPlayHandler,
  onPauseHandler,
  onResetHandler
}) {
  return (
        <>
            <button
                id='start_stop'
                onClick={isRunning ? onPauseHandler : onPlayHandler}
            >
                { isRunning ? <FaPause /> : <FaPlay /> }
            </button>
            <button
                id='reset'
                onClick={onResetHandler}
            >
                <FaUndoAlt />
            </button>
        </>
  )
}
