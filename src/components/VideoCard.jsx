import { useContext } from 'react'; // Importation du hook useContext de React
import PropTypes from 'prop-types'; // Importation de PropTypes pour la validation des types de props
import { ThemeContext } from '../App'; // Importation du contexte du thème

// Définition du composant VideoCard
export function VideoCard({ video, onClick }) {
  const { isDarkMode } = useContext(ThemeContext); // Utilisation du contexte du thème pour obtenir isDarkMode

  return (
    <div className="cursor-pointer" onClick={() => onClick(video)}>
      <div className="relative pb-[56.25%]"> {/* Conteneur pour la miniature de la vidéo avec un ratio d'aspect de 16:9 */}
        <img
          src={video.thumbnail}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover rounded-xl" // Image de la miniature de la vidéo
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 px-2 py-1 rounded text-xs text-white">
          {video.duration} {/* Durée de la vidéo */}
        </div>
      </div>
      <div className="mt-3 flex gap-3">
        <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"> {/* Conteneur pour l'avatar de la chaîne */}
          <img
            src={video.channelAvatar === "profile.png" ? "/profile.png" : video.channelAvatar}
            alt={video.channel}
            className="w-full h-full object-cover" // Image de l'avatar de la chaîne
          />
        </div>
        <div>
          <h3 className="font-medium line-clamp-2">{video.title}</h3> {/* Titre de la vidéo */}
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{video.channel}</p> {/* Nom de la chaîne */}
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {video.views} • {video.timestamp} {/* Nombre de vues et horodatage */}
          </p>
        </div>
      </div>
    </div>
  );
}

// Validation des types de props
VideoCard.propTypes = {
  video: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    channelAvatar: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};