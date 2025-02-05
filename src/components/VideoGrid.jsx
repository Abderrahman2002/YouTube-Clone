import  { useContext } from 'react';
import PropTypes from 'prop-types';
import { VideoCard } from './VideoCard';
import { videos } from '../data/videos';
import { ThemeContext } from '../App';

export function VideoGrid({ isSidebarOpen, onVideoClick }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <main className={`flex-1 p-6 ${isSidebarOpen ? 'ml-60' : 'ml-20'} ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map(video => (
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
};