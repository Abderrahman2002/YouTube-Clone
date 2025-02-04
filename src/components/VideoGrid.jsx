import { VideoCard } from './VideoCard';
import { videos } from '../data/videos';
import PropTypes from 'prop-types';

export function VideoGrid({ isSidebarOpen, onVideoClick }) {
  return (
    <main className={`flex-1 p-6 ${isSidebarOpen ? 'ml-60' : 'ml-20'}`}>
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