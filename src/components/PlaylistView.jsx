import { useContext } from 'react'; // Importation du hook useContext de React
import PropTypes from 'prop-types'; // Importation de PropTypes pour la validation des types de props
import { ThemeContext } from '../App'; // Importation du contexte du thème
import { VideoCard } from './VideoCard'; // Importation du composant VideoCard

// Définition du composant PlaylistView
export function PlaylistView({ playlist, isSidebarOpen, onVideoClick }) {
  const { isDarkMode } = useContext(ThemeContext); // Utilisation du contexte du thème pour obtenir isDarkMode
  if (!playlist) return null; // Ne rien rendre si aucune playlist n'est fournie

  return (
    <main className={`flex-1 p-6 ${isSidebarOpen ? 'ml-60' : 'ml-20'}`}>
      {/* Affichage des détails de la playlist */}
      <div className={`mb-8 p-6 ${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-xl`}>
        <div className="flex gap-6">
          <div className="w-48 h-48 rounded-xl overflow-hidden">
            <img 
              src={playlist.thumbnail} 
              alt={playlist.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">{playlist.name}</h1>
            <p className="text-gray-400">{playlist.videoCount} vidéos</p>
          </div>
        </div>
      </div>

      {/* Affichage des vidéos de la playlist */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {playlist.videos.map(video => (
          <VideoCard
            // key={video.id}
            video={video}
            onClick={onVideoClick}
          />
        ))}
      </div>
    </main>
  );
}

// Validation des types de props
PlaylistView.propTypes = {
  playlist: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    videoCount: PropTypes.number.isRequired,
    videos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        // Ajouter d'autres propriétés de vidéo ici si nécessaire
      })
    ).isRequired,
  }),
  isSidebarOpen: PropTypes.bool.isRequired,
  onVideoClick: PropTypes.func.isRequired,
};