import { useState } from 'react'
import './Music.css'

const Music = () => {
  const [activeVideo, setActiveVideo] = useState(null)

  // You can add your YouTube video IDs here
  const videos = [
    {
      id: 'guitar1',
      title: 'Guitar Performance',
      youtubeId: '', // Add your YouTube video ID here (e.g., 'dQw4w9WgXcQ')
      description: 'A beautiful guitar performance showcasing my musical skills.'
    },
    {
      id: 'singing1',
      title: 'Singing Performance',
      youtubeId: '', // Add your YouTube video ID here
      description: 'A vocal performance demonstrating my singing abilities.'
    }
  ]

  return (
    <section id="music" className="music-section">
      <div className="music-bg"></div>
      <div className="music-container">
        <div className="music-header">
          <span className="music-label">🎸 MUSIC</span>
          <h2 className="music-title">Guitar & Singing</h2>
          <p className="music-subtitle">
            Where code meets melody. Exploring the harmony between technology and music.
          </p>
        </div>

        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-header">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
              
              {video.youtubeId ? (
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="video-placeholder">
                  <div className="placeholder-icon">🎵</div>
                  <p>Add your YouTube video ID to display the video</p>
                  <code className="placeholder-code">youtube.com/watch?v=VIDEO_ID</code>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="music-footer">
          <p className="music-note">
            <span className="note-icon">♪</span>
            Music is the universal language that connects us all
            <span className="note-icon">♪</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Music
