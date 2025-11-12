import { useState, useEffect } from 'react';
import '../main.css';

const Journals = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const CHANNEL_HANDLE = '@HRUNLOCKafrica';
  const CHANNEL_URL = 'https://www.youtube.com/@HRUNLOCKafrica';
  // YouTube Channel ID for automatic video loading
  const CHANNEL_ID = 'UCP2TPJBbAqy9X_W-4ebtIdQ';

  // Function to extract video ID from YouTube URL or ID
  const extractVideoId = (url) => {
    if (!url) return null;
    // If it's already just an ID, return it
    if (url.length === 11 && !url.includes('/') && !url.includes('?')) {
      return url;
    }
    // Extract from various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  // Function to fetch videos from YouTube RSS feed
  const fetchVideosFromRSS = async (channelId) => {
    try {
      // Use a CORS proxy to fetch the RSS feed
      const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`)}`;
      
      const response = await fetch(proxyUrl);
      if (!response.ok) throw new Error('Failed to fetch videos');
      
      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        const videoList = data.items.map((item) => {
          // Extract video ID from the link
          const videoId = extractVideoId(item.link);
          return {
            id: videoId,
            title: item.title,
            description: item.description,
            published: item.pubDate,
            link: item.link,
            thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          };
        });
        return videoList;
      }
      return [];
    } catch (err) {
      console.error('Error fetching RSS feed:', err);
      throw err;
    }
  };

  // Function to get channel ID from handle using YouTube Data API
  const getChannelIdFromHandle = async (handle) => {
    try {
      // Try to get channel ID from handle
      // Note: This requires the actual channel ID. You can find it by:
      // 1. Going to your YouTube channel
      // 2. View page source and search for "channelId"
      // 3. Or use a service like https://commentpicker.com/youtube-channel-id.php
      
      // For now, we'll try to fetch from the channel page
      // This is a workaround - ideally you'd have the channel ID
      return null;
    } catch (err) {
      console.error('Error getting channel ID:', err);
      return null;
    }
  };

  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Use the channel ID if provided
        if (CHANNEL_ID) {
          const videoList = await fetchVideosFromRSS(CHANNEL_ID);
          setVideos(videoList);
        } else {
          // Try to get channel ID from handle
          const channelId = await getChannelIdFromHandle(CHANNEL_HANDLE);
          
          if (channelId) {
            const videoList = await fetchVideosFromRSS(channelId);
            setVideos(videoList);
          } else {
            setError('Channel ID needed. Please add your YouTube channel ID to fetch videos automatically.');
          }
        }
      } catch (err) {
        setError('Unable to load videos automatically. Please add your YouTube channel ID in the code.');
        console.error('Error loading videos:', err);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

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

          {/* Videos Grid */}
          {loading && (
            <div style={{ 
              textAlign: 'center', 
              padding: '3rem',
              color: 'var(--neutral-gray)'
            }}>
              <p>Loading videos...</p>
            </div>
          )}

          {error && !loading && (
            <div style={{ 
              textAlign: 'center', 
              padding: '2rem',
              background: 'var(--soft-bg-tint)',
              borderRadius: '8px',
              marginBottom: '2rem'
            }}>
              <p style={{ color: 'var(--neutral-gray)', marginBottom: '1rem' }}>
                {error}
              </p>
              <p style={{ color: 'var(--neutral-gray)', fontSize: '0.875rem' }}>
                To enable automatic video loading, add your YouTube channel ID. 
                Find it at: <a href="https://commentpicker.com/youtube-channel-id.php" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)' }}>Get Channel ID</a>
              </p>
            </div>
          )}

          {!loading && videos.length > 0 && (
            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ 
                marginBottom: '2rem', 
                textAlign: 'center',
                color: 'var(--accent-black)',
                fontSize: '1.75rem'
              }}>
                All Podcasts & Videos
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2rem',
                marginTop: '2rem'
              }}>
                {videos.map((video) => (
                  <div 
                    key={video.id} 
                    style={{
                      background: 'var(--bg-white)',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 168, 89, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                    }}
                    onClick={() => window.open(video.link, '_blank')}
                  >
                    <div style={{
                      position: 'relative',
                      paddingBottom: '56.25%',
                      height: 0,
                      overflow: 'hidden',
                      background: '#000'
                    }}>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '68px',
                        height: '48px',
                        background: 'rgba(255, 0, 0, 0.9)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <h4 style={{ 
                        color: 'var(--accent-black)',
                        marginBottom: '0.5rem',
                        fontSize: '1.125rem',
                        lineHeight: '1.4',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {video.title}
                      </h4>
                      {video.published && (
                        <p style={{ 
                          color: 'var(--neutral-gray)',
                          fontSize: '0.875rem',
                          marginTop: '0.5rem'
                        }}>
                          {new Date(video.published).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!loading && videos.length === 0 && !error && (
            <div style={{ 
              textAlign: 'center', 
              padding: '3rem',
              background: 'var(--soft-bg-tint)',
              borderRadius: '12px'
            }}>
              <p style={{ color: 'var(--neutral-gray)', marginBottom: '1rem' }}>
                No videos found. Visit our YouTube channel to see all content.
              </p>
              <a 
                href={CHANNEL_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Visit YouTube Channel
              </a>
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

