import { useId, useEffect } from 'react'

function DrumButton ({ keyValue, placeholder }) {
  const buttonId = useId()
  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.keyCode === keyValue) {
        document.getElementById(buttonId).click()
      }
    })
  }, [])

  function onClick () {
    console.log(`Key ${placeholder} with id ${keyValue} pressed`)
  }

  return (
    <button
      id={buttonId}
      className='drum'
      onClick={onClick}

    >{placeholder}
    </button>
  )
}

export default DrumButton
