import { useContext, useState } from 'react'; // Importation des hooks useContext et useState de React
import PropTypes from 'prop-types'; // Importation de PropTypes pour la validation des types de props
import { Home, Compass, Clock, ThumbsUp, PlaySquare, ListVideo, History, Film, Gamepad, Newspaper, Trophy, Music2 } from 'lucide-react'; // Importation des icônes de lucide-react
import { playlists } from '../data/videos'; // Importation des playlists depuis les données
import { ThemeContext } from '../App'; // Importation du contexte du thème
import { Link } from 'react-router-dom'; // Importation du composant Link de React Router

// Définition du composant Sidebar
export function Sidebar({ isOpen, onPlaylistClick, currentPath }) {
  const { isDarkMode } = useContext(ThemeContext); // Utilisation du contexte du thème pour obtenir isDarkMode
  const [currentView, setCurrentView] = useState(''); // État local pour la vue actuelle

  // Fonction pour changer la vue actuelle
  const onViewChange = (view) => {
    setCurrentView(view);
  };

  // Fonction pour gérer le clic sur une vue
  const handleViewClick = (view) => {
    onViewChange(view);
  };

  return (
    <aside className={`fixed left-0 top-14 h-full ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white'} transition-all overflow-y-auto ${isOpen ? 'w-60' : 'w-20'}`}>
      <div className="p-2">
        <div className="mb-4">
          {/* Lien vers la page d'accueil */}
          <Link 
            to="/"
            onClick={() => handleViewClick('home')}
            className={`w-full flex items-center gap-4 px-3 py-2 ${currentView === 'home' ? (isDarkMode ? 'bg-[#272727]' : 'bg-gray-100') : ''} rounded-lg`}
          >
            <Home className="w-6 h-6" />
            {isOpen && <span>Home</span>}
          </Link>
          {/* Lien vers la page d'exploration */}
          <Link 
            to="/explore"
            onClick={() => handleViewClick('explore')}
            className={`w-full flex items-center gap-4 px-3 py-2 ${currentView === 'explore' ? (isDarkMode ? 'bg-[#272727]' : 'bg-gray-100') : ''} hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}
          >
            <Compass className="w-6 h-6" />
            {isOpen && <span>Explore</span>}
          </Link>
          {/* Lien vers la page des abonnements */}
          <Link 
            to="/subscriptions"
            onClick={() => handleViewClick('subscriptions')}
            className={`w-full flex items-center gap-4 px-3 py-2 ${currentView === 'subscriptions' ? (isDarkMode ? 'bg-[#272727]' : 'bg-gray-100') : ''} hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}
          >
            <ListVideo className="w-6 h-6" />
            {isOpen && <span>Subscriptions</span>}
          </Link>
        </div>

        {isOpen && <hr className={`border-${isDarkMode ? '[#272727]' : 'gray-200'} my-2`} />}

        <div className="mb-4">
          {/* Lien vers la bibliothèque */}
          <Link to="/library" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
            <PlaySquare className="w-6 h-6" />
            {isOpen && <span>Library</span>}
          </Link>
          {/* Lien vers l'historique */}
          <Link to="/history" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
            <History className="w-6 h-6" />
            {isOpen && <span>History</span>}
          </Link>
          {/* Lien vers les vidéos à regarder plus tard */}
          <Link to="/watch-later" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
            <Clock className="w-6 h-6" />
            {isOpen && <span>Watch Later</span>}
          </Link>
          {/* Lien vers les vidéos aimées */}
          <Link to="/liked-videos" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
            <ThumbsUp className="w-6 h-6" />
            {isOpen && <span>Liked Videos</span>}
          </Link>
        </div>

        {isOpen && (
          <>
            <hr className={`border-${isDarkMode ? '[#272727]' : 'gray-200'} my-2`} />
            
            <div className="mb-4">
              <h3 className="px-3 py-2 text-sm font-medium">Explore</h3>
              {/* Lien vers les films */}
              <Link to="/movies" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
                <Film className="w-6 h-6" />
                <span>Movies</span>
              </Link>
              {/* Lien vers les jeux */}
              <Link to="/gaming" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
                <Gamepad className="w-6 h-6" />
                <span>Gaming</span>
              </Link>
              {/* Lien vers les actualités */}
              <Link to="/news" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
                <Newspaper className="w-6 h-6" />
                <span>News</span>
              </Link>
              {/* Lien vers les sports */}
              <Link to="/sports" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
                <Trophy className="w-6 h-6" />
                <span>Sports</span>
              </Link>
              {/* Lien vers la musique */}
              <Link to="/music" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
                <Music2 className="w-6 h-6" />
                <span>Music</span>
              </Link>
            </div>

            <hr className={`border-${isDarkMode ? '[#272727]' : 'gray-200'} my-2`} />

            <div className="mb-4">
              <h3 className="px-3 py-2 text-sm font-medium">Playlists</h3>
              {/* Affichage des playlists */}
              {playlists.map(playlist => (
                <button 
                  key={playlist.id}
                  onClick={() => onPlaylistClick(playlist)}
                  className={`w-full flex items-center gap-4 px-3 py-2 ${
                    currentPath === `/playlist/${playlist.id}` 
                      ? (isDarkMode ? 'bg-[#272727]' : 'bg-gray-100') 
                      : ''
                  } hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}
                >
                  <div className="w-6 h-6 rounded overflow-hidden">
                    <img 
                      src={playlist.thumbnail} 
                      alt={playlist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>{playlist.name}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

// Validation des types de props
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onPlaylistClick: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
};