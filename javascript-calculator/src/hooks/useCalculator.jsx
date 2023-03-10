import { useState } from 'react'

export default function useCalculator () {
  const [operands, setOperands] = useState([])
  const [operators, setOperators] = useState([])
  const [isOperated, setIsOperated] = useState(false)

  const clearDisplay = () => {
    setOperands([])
    setOperators([])
  }

  const addOperand = (number) => {
    if (isOperated) {
      setOperands([number])
      setIsOperated(false)
      return
    }
    if (operands.length <= operators.length) {
      setOperands(current => [...current, number])
    } else {
      setOperands(current => {
        const copy = [...current]
        let last = copy.pop()
        if (number === '.' && last.includes('.')) {
          return current
        }
        last += number
        copy.push(last)
        return copy
      })
    }
  }

  const addOperator = (operator) => {
    if (operators.length === operands.length) {
      return
    }
    setOperators(curr => [...curr, operator])
    setIsOperated(false)
  }

  const handleOperation = () => {
    if (operands.length === operators.length) {
      return
    }
    let result = parseFloat(operands[0])
    for (let i = 1; i < operands.length; i++) {
      const num = parseFloat(operands.at(i))
      const operator = operators.at(i - 1)
      switch (operator) {
        case '+':
          result += num
          break
        case '-':
          result -= num
          break
        case '*':
          result *= num
          break
        case '/':
          result /= num
          break
      }
    }
    setOperands([result])
    setOperators([])
    setIsOperated(true)
  }

  const handle = (handlerName) => {
    if (handlerName === 'clearHandler') return clearDisplay
    if (handlerName === 'operandHandler') return addOperand
    if (handlerName === 'operatorHandler') return addOperator
    if (handlerName === 'operateHandler') return handleOperation
    return null
  }

  const displayContent = operands.length > 0
    ? operands.map((operand, i) => {
      const operator = operators.at(i)
      return operator ? operand + operator : operand
    })
    : '0'

  return {
    displayContent,
    handle
  }
}
