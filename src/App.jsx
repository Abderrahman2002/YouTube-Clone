import { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { Sidebar } from './components/Sidebar';
import { VideoGrid } from './components/VideoGrid';
import { VideoPlayer } from './components/VideoPlayer';
import { PlaylistView } from './components/PlaylistView';
import { VideoForm } from './components/VideoForm';
import { videos as initialVideos } from './data/videos';
import { Provider } from 'react-redux';
import { store } from './store';

export const ThemeContext = createContext({
  isDarkMode: true,
  setIsDarkMode: () => {},
});

function AppContent() {
  const [videos, setVideos] = useState(initialVideos); // make videos editable
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    navigate(`/watch/${video.id}`);
  };

  // Callback for VideoForm save (create or update)
  const handleSaveVideo = (videoData) => {
    setVideos(prev => {
      const exists = prev.find(v => v.id === videoData.id);
      if (exists) {
        return prev.map(v => (v.id === videoData.id ? videoData : v));
      } else {
        // Assign a simple id if new video
        return [...prev, { ...videoData, id: (prev.length + 1).toString() }];
      }
    });
  };

  const handlePlaylistClick = (playlist) => {
    setCurrentPlaylist(playlist);
    navigate(`/playlist/${playlist.id}`);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className={`min-h-screen ${isDarkMode ? 'bg-[#0f0f0f] text-white' : 'bg-white text-black'}`}>
        <Header 
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="flex pt-14">
          <Sidebar 
            isOpen={isSidebarOpen} 
            onPlaylistClick={handlePlaylistClick}
            currentPath={location.pathname}
          />
          <div className="w-full">
            <div className="hidden">{videos.length} videos loaded</div> {/* Use videos state */}
            <Routes>
              <Route path="/" element={<VideoGrid isSidebarOpen={isSidebarOpen} onVideoClick={handleVideoClick} />} />
              <Route 
                path="/playlist/:playlistId" 
                element={
                  <PlaylistView 
                    playlist={currentPlaylist} 
                    isSidebarOpen={isSidebarOpen} 
                    onVideoClick={handleVideoClick} 
                  />
                } 
              />
              <Route 
                path="/watch/:videoId" 
                element={
                  <VideoPlayer 
                    video={selectedVideo}
                    onClose={() => {
                      setSelectedVideo(null);
                      navigate(-1);
                    }}
                    onVideoChange={(video) => {
                      setSelectedVideo(video);
                      navigate(`/watch/${video.id}`);
                    }}
                    onPlaylistClick={handlePlaylistClick}
                  />
                } 
              />
              <Route 
                path="/admin/videos" 
                element={<VideoForm onSave={handleSaveVideo} />} 
              />
              <Route 
                path="/admin/videos/:videoId" 
                element={<VideoForm onSave={handleSaveVideo} />} 
              />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;