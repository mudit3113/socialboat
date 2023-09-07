import React from 'react'
import VideoCard from './VideoCard'
import './display.css'

function Results({ searchResults, searchQuery }) {
  return (
    <div className="results">
      {searchResults.map((video) => (
        <VideoCard
          key={video.id}
          videoContent={video.video}
          queryHeading={searchQuery}
          tags={video.tags}
        />
      ))}
    </div>
  )
}

export default Results
