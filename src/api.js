const url =
  'https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos'

async function apiCall(searchQuery, numResults = 10) {
  try {
    const response = await fetch(
      `${url}?q=${searchQuery}&numResults=${numResults}`,
    )

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    console.log('error', error)
  }
}

export default apiCall
