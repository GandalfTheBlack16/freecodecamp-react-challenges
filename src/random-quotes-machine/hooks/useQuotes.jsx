import { useState, useEffect } from 'react'

const API_URI = 'https://dummyjson.com/quotes/random'

export default function useQuotes () {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fetchQuote = () => {
    setIsLoading(true)
    fetch(API_URI)
      .then(response => response.json())
      .then(({ quote, author }) => {
        setIsLoading(false)
        setQuote(quote)
        setAuthor(author)
      })
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  const renewQuote = () => {
    fetchQuote()
  }

  return {
    quote,
    author,
    isLoading,
    renewQuote
  }
}
