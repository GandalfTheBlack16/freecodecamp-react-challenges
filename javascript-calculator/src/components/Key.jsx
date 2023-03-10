export default function Key ({ id, number, handleClick }) {
  const onClick = () => {
    handleClick(number)
  }

  return (
    <div
      id={id}
      onClick={onClick}
    > {number}
    </div>
  )
}
