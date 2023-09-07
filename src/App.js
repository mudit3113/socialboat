import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Results from './components/Results'
import apiCall from './api'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async (query) => {
    try {
      if (!query) {
        setSearchResults([])
        return
      }

      const results = await apiCall(query)
      setSearchResults(results)
    } catch (error) {
      console.error('Error fetching videos:', error)
    }
  }

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery)
    }
  }, [searchQuery])

  return (
    <div className="App">
      <Header
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Results searchResults={searchResults} searchQuery={searchQuery} />
    </div>
  )
}

export default App
