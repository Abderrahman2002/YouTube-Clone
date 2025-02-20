import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../App';

export function VideoCard({ video, onClick }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="cursor-pointer" onClick={() => onClick(video)}>
      <div className="relative pb-[56.25%]">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 px-2 py-1 rounded text-xs text-white">
          {video.duration}
        </div>
      </div>
      <div className="mt-3 flex gap-3">
        <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={video.channelAvatar === "profile.png" ? "/profile.png" : video.channelAvatar}
            alt={video.channel}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium line-clamp-2">{video.title}</h3>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{video.channel}</p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {video.views} • {video.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

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