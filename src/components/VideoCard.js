import React from 'react'
import './display.css'

function VideoCard({ videoContent, queryHeading, tags }) {
  console.log('ss', queryHeading)
  return (
    <div className="video-card">
      <video src={videoContent} controls></video>
      <span className="heading-query">{queryHeading}</span>
      <div className="tags">
        Tags:
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default VideoCard
