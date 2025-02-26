import { useState, createContext, useEffect } from 'react'; // Importation des hooks useState, createContext et useEffect de React
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'; // Importation des composants et hooks de React Router
import Header from './components/Header'; // Importation du composant Header
import { Sidebar } from './components/Sidebar'; // Importation du composant Sidebar
import { VideoGrid } from './components/VideoGrid'; // Importation du composant VideoGrid
import { VideoPlayer } from './components/VideoPlayer'; // Importation du composant VideoPlayer
import { PlaylistView } from './components/PlaylistView'; // Importation du composant PlaylistView
import { videos as initialVideos } from './data/videos'; // Importation des vidéos initiales
import { Provider } from 'react-redux'; // Importation du composant Provider de React Redux
import { store } from './store'; // Importation du store Redux

// Création du contexte du thème
export const ThemeContext = createContext({
  isDarkMode: true,
  setIsDarkMode: () => {},
});

// Définition du composant AppContent
function AppContent() {
  const [videos, setVideos] = useState(initialVideos); // État local pour les vidéos
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // État local pour savoir si la barre latérale est ouverte
  const [selectedVideo, setSelectedVideo] = useState(null); // État local pour la vidéo sélectionnée
  const [isDarkMode, setIsDarkMode] = useState(true); // État local pour le mode sombre
  const [currentPlaylist, setCurrentPlaylist] = useState(null); // État local pour la playlist actuelle
  const navigate = useNavigate(); // Hook pour naviguer entre les routes
  const location = useLocation(); // Hook pour obtenir la localisation actuelle

  // Effet pour gérer la redimension de la fenêtre
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

  // Fonction pour gérer le clic sur une vidéo
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    navigate(`/watch/${video.id}`);
  };

  // Fonction pour sauvegarder une vidéo (création ou mise à jour)
  const handleSaveVideo = (videoData) => {
    setVideos(prev => {
      const exists = prev.find(v => v.id === videoData.id);
      if (exists) {
        return prev.map(v => (v.id === videoData.id ? videoData : v));
      } else {
        // Assigner un ID simple si nouvelle vidéo
        return [...prev, { ...videoData, id: (prev.length + 1).toString() }];
      }
    });
  };

  // Fonction pour gérer le clic sur une playlist
  const handlePlaylistClick = (playlist) => {
    setCurrentPlaylist(playlist);
    navigate(`/playlist/${playlist.id}`);
  };

  console.log('Videos:', videos);
  console.log('Current Playlist:', currentPlaylist);

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
            <div className="hidden">{videos.length} videos loaded</div> {/* Utilisation de l'état des vidéos */}
            <button onClick={() => handleSaveVideo({ title: 'New Video', description: 'Description' })}>Save Video</button>
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
            </Routes>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

// Définition du composant App
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