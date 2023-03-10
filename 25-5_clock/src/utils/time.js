export function toMMSS (secondsString) {
  const sec = parseInt(secondsString, 10)
  const minutes = Math.floor(sec / 60)
  const seconds = sec - (minutes * 60)
  const formatted = `${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`
  return formatted
}

export function toMinutes (secondsString) {
  return Math.floor(parseInt(secondsString, 10) / 60)
}
