import { useSelector } from 'react-redux'; // Importation du hook useSelector de Redux
import { useContext } from 'react'; // Importation du hook useContext de React
import PropTypes from 'prop-types'; // Importation de PropTypes pour la validation des types de props
import { VideoCard } from './VideoCard'; // Importation du composant VideoCard
import { ThemeContext } from '../App'; // Importation du contexte du thème

// Définition du composant VideoGrid
export function VideoGrid({ isSidebarOpen, onVideoClick, playlist }) {
  const { isDarkMode } = useContext(ThemeContext); // Utilisation du contexte du thème pour obtenir isDarkMode
  const videos = useSelector(state => state.videos.videos); // Accès aux vidéos depuis l'état Redux

  // Filtrer les vidéos en fonction de la playlist sélectionnée
  const playlistVideos = playlist ? playlist.videos : [];
  const otherVideos = videos.filter(video => !playlistVideos.includes(video));

  return (
    <main className={`flex-1 p-6 ${isSidebarOpen ? 'ml-60' : 'ml-20'} ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {playlistVideos.map(video => (
          <VideoCard
            key={video.id}
            video={video} 
            onClick={onVideoClick}
          />
        ))}  
        {otherVideos.map(video => (
          <VideoCard
            key={video.id}
            video={video}
            onClick={onVideoClick}
          />
        ))}
      </div>
    </main>
  );
}

// Validation des types de props
VideoGrid.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  onVideoClick: PropTypes.func.isRequired,
  playlist: PropTypes.object, // Ajout de cette prop
};