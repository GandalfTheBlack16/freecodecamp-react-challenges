import { useId, useEffect } from 'react'

function DrumButton ({ keyValue, placeholder }) {
  const buttonId = useId()
  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.keyCode === keyValue) {
        document.getElementById(buttonId).click()
      }
    })

    return () => document.removeEventListener('keydown')
  }, [])

  function onClick (event) {
    console.log(`Key ${placeholder} with id ${keyValue} pressed`)
  }

  return (
    <button
      id={buttonId}
      onClick={onClick}

    >{placeholder}
    </button>
  )
}

export default DrumButton
