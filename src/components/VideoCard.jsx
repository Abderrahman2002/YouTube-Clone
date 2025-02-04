
import PropTypes from 'prop-types';

export function VideoCard({ video, onClick }) {
  return (
    <div className="cursor-pointer" onClick={() => onClick(video)}>
      <div className="relative pb-[56.25%]">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 px-2 py-1 rounded text-xs">
          {video.duration}
        </div>
      </div>
      <div className="mt-3">
        <h3 className="font-medium line-clamp-2">{video.title}</h3>
        <p className="text-sm text-gray-400 mt-1">{video.channel}</p>
        <p className="text-sm text-gray-400">
          {video.views} • {video.timestamp}
        </p>
      </div>
    </div>
  );
}

VideoCard.propTypes = {
  video: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};