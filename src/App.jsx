import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { VideoGrid } from './components/VideoGrid';
import { VideoPlayer } from './components/VideoPlayer';
import { PlaylistView } from './components/PlaylistView';

export const ThemeContext = createContext({
  isDarkMode: true,
  setIsDarkMode: () => {},
});

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    navigate(`/watch/${video.id}`);
  };

  const handlePlaylistClick = (playlist) => {
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
            <Routes>
              <Route path="/" element={<VideoGrid isSidebarOpen={isSidebarOpen} onVideoClick={handleVideoClick} />} />
              <Route 
                path="/playlist/:playlistId" 
                element={<PlaylistView isSidebarOpen={isSidebarOpen} onVideoClick={handleVideoClick} />} 
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
                  />
                } 
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
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;