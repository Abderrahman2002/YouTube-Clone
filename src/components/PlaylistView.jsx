import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../App';
import { VideoCard } from './VideoCard';

export function PlaylistView({ playlist, isSidebarOpen, onVideoClick }) {
  const { isDarkMode } = useContext(ThemeContext);
  if (!playlist) return null; // Render nothing if no playlist is provided.

  return (
    <main className={`flex-1 p-6 ${isSidebarOpen ? 'ml-60' : 'ml-20'}`}>
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
            <p className="text-gray-400">{playlist.videoCount} videos</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {playlist.videos.map(video => (
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

PlaylistView.propTypes = {
  playlist: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    videoCount: PropTypes.number.isRequired,
    videos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        // Add other video properties here if needed
      })
    ).isRequired,
  }),
  isSidebarOpen: PropTypes.bool.isRequired,
  onVideoClick: PropTypes.func.isRequired,
};