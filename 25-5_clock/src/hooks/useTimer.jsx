import { useState, useEffect } from 'react'

const BEEP_SOUND_URL = 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'

export default function useTimer({ initSessionTime, initBreakTime }) {

    const [sessionTimer, setSessionTimer] = useState(initSessionTime)
    const [breakTimer, setBreakTimer] = useState(initBreakTime)
    const [currentTimer, setCurrentTimer] = useState('session')
    const [isRunning, setIsRunning] = useState(false)
    const [time, setTime] = useState(sessionTimer)

    // eslint-disable-next-line no-undef
    const audio = new Audio(BEEP_SOUND_URL)

    useEffect(() => {
        if (isRunning){
            const interval = setInterval(() => {
                setTime(curr => curr - 1)
            }, 1000)
    
            if (time === 0){
                audio.play()
                if (currentTimer === 'session'){
                    setTime(breakTimer)
                    setCurrentTimer('break')
                } else {
                    setTime(sessionTimer)
                    setCurrentTimer('session')
                }
            }

            return () => clearInterval(interval)
        }

    }, [time, isRunning, currentTimer, sessionTimer, breakTimer])

    const incrementSession = () => {
        if (sessionTimer > 3540){
            return
        }
        setSessionTimer(curr => curr + 60)
        if (currentTimer === 'session'){
            setTime(sessionTimer + 60)
        }
    }

    const decrementSession = () => {
        if (sessionTimer <= 60){
            return
        }
        setSessionTimer(curr => curr - 60)
        if (currentTimer === 'session'){
            setTime(sessionTimer - 60)
        }
    }

    const incrementBreak = () => {
        if (breakTimer > 3540){
            return
        }
        setBreakTimer(curr => curr + 60)
        if (currentTimer === 'break'){
            setTime(breakTimer + 60)
        }
    }
    
    const decrementBreak = () => {
        if (breakTimer <= 60){
            return
        }
        setBreakTimer(curr => curr - 60)
        if (currentTimer === 'break'){
            setTime(breakTimer - 60)
        }
    }
    
    const resetTimers = () => {
        setSessionTimer(initSessionTime)
        setBreakTimer(initBreakTime)
        setIsRunning(false)
        setTime(initSessionTime)
        setCurrentTimer('session')
    }

    const play = () => {
        setIsRunning(true)
    }

    const pause = () => {
        setIsRunning(false)
    }
    
    return {
        sessionTimer,
        breakTimer,
        currentTimer,
        isRunning,
        time,
        incrementSession,
        decrementSession,
        incrementBreak,
        decrementBreak,
        resetTimers,
        play,
        pause
    }
}
