import { useState, useEffect } from 'react';
import '../main.css';

const Journals = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // YouTube channel ID from @HRUNLOCKafrica
  const CHANNEL_ID = 'UC_HRUNLOCK_AFRICA'; // This will need to be the actual channel ID
  const CHANNEL_HANDLE = '@HRUNLOCKafrica';
  const CHANNEL_URL = 'https://www.youtube.com/@HRUNLOCKafrica';

  useEffect(() => {
    // Since we don't have API key, we'll embed the channel directly
    // Users can also manually add video IDs here
    // For now, we'll create a structure that can display videos
    setLoading(false);
  }, []);

  // Sample structure - you can add specific video IDs here
  // To get video IDs: go to YouTube video, copy the ID from the URL (e.g., dQw4w9WgXcQ)
  const sampleVideos = [
    // Add video IDs here as you publish them
    // Example: { id: 'VIDEO_ID_1', title: 'Video Title 1' },
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Journals & Podcasts</h1>
          <p>Watch our latest podcasts and video content on YouTube</p>
        </div>
      </section>

      <section className="journals">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">HRUNLOCK Africa Podcasts</h2>
            <p className="section-subtitle">
              Explore our collection of podcasts and video content covering psychology, culture, design, and leadership transformation in Africa.
            </p>
            <div style={{ marginTop: '1rem' }}>
              <a 
                href={CHANNEL_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Visit Our YouTube Channel
              </a>
            </div>
          </div>

          {/* YouTube Channel Embed */}
          <div style={{ 
            marginTop: '3rem', 
            marginBottom: '3rem',
            textAlign: 'center' 
          }}>
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              background: 'var(--soft-bg-tint)',
              padding: '2rem',
              borderRadius: '12px'
            }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-black)' }}>
                Watch Our Latest Content
              </h3>
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                height: 0,
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                background: '#000'
              }}>
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  src="https://www.youtube.com/embed/videoseries?list=UU_HRUNLOCK_AFRICA"
                  title="HRUNLOCK Africa YouTube Channel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p style={{ 
                marginTop: '1rem', 
                color: 'var(--neutral-gray)',
                fontSize: '0.9375rem'
              }}>
                Subscribe to our channel for the latest podcasts and insights
              </p>
            </div>
          </div>

          {/* Alternative: Direct Channel Link Card */}
          <div style={{
            maxWidth: '1200px',
            margin: '3rem auto',
            background: 'var(--bg-white)',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-black)' }}>
              Browse All Podcasts
            </h3>
            <p style={{ 
              color: 'var(--neutral-gray)',
              marginBottom: '1.5rem',
              fontSize: '1rem'
            }}>
              Visit our YouTube channel to watch all our podcasts and video content
            </p>
            <a 
              href={CHANNEL_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Open YouTube Channel
            </a>
          </div>

          {/* Individual Video Embed Section */}
          {sampleVideos.length > 0 && (
            <div style={{ marginTop: '4rem' }}>
              <h3 style={{ 
                marginBottom: '2rem', 
                textAlign: 'center',
                color: 'var(--accent-black)'
              }}>
                Featured Podcasts
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
                marginTop: '2rem'
              }}>
                {sampleVideos.map((video, index) => (
                  <div key={index} style={{
                    background: 'var(--bg-white)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 168, 89, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}>
                    <div style={{
                      position: 'relative',
                      paddingBottom: '56.25%',
                      height: 0,
                      overflow: 'hidden'
                    }}>
                      <iframe
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none'
                        }}
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <h4 style={{ 
                        color: 'var(--accent-black)',
                        marginBottom: '0.5rem',
                        fontSize: '1.125rem'
                      }}>
                        {video.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Direct Channel Link */}
          <div style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--secondary-green) 100%)',
            borderRadius: '12px',
            color: 'var(--bg-white)'
          }}>
            <h3 style={{ 
              color: 'var(--bg-white)',
              marginBottom: '1rem',
              fontSize: '1.75rem'
            }}>
              Subscribe to Our Channel
            </h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '2rem',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Get notified when we publish new podcasts and video content. Join our community of thinkers, leaders, and changemakers.
            </p>
            <a 
              href={CHANNEL_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
              style={{
                background: 'var(--bg-white)',
                color: 'var(--primary-green)',
                border: '2px solid var(--bg-white)'
              }}
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Journals;

