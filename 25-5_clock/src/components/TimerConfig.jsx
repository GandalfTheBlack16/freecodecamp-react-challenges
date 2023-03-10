import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

export default function TimerConfig({
    label, 
    identifier, 
    timerValue, 
    onIncrement, 
    onDecrement,
    btnDisabledCondition
}) {
    
    return (
        <div className="timerConfig__container"> 
            <h3 
                id={`${identifier}-label`}
                className="timerConfig__label">
                    {label}
            </h3>
            <div className="timerConfig__controls">
                <button 
                    id={`${identifier}-increment`}
                    disabled={btnDisabledCondition}
                    onClick={onIncrement}>
                        <FaAngleUp />
                </button>
                <div id={`${identifier}-length`}>{timerValue}</div>
                <button 
                    id={`${identifier}-decrement`}
                    disabled={btnDisabledCondition}
                    onClick={onDecrement}>
                        <FaAngleDown />
                </button>
            </div>
        </div>
    )
}
