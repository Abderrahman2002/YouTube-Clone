import { useSelector } from 'react-redux';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { VideoCard } from './VideoCard';
import { ThemeContext } from '../App';

export function VideoGrid({ isSidebarOpen, onVideoClick, playlist }) {
  const { isDarkMode } = useContext(ThemeContext);
  const videos = useSelector(state => state.videos.videos); // Access videos from Redux state

  // Filter videos based on the selected playlist
  const playlistVideos = playlist ? playlist.videos : [];
  const otherVideos = videos.filter(video => !playlistVideos.includes(video));

  console.log('Playlist Videos:', playlistVideos);
  console.log('Other Videos:', otherVideos);

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

VideoGrid.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  onVideoClick: PropTypes.func.isRequired,
  playlist: PropTypes.object, // Add this prop
};