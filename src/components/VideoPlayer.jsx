import { ThumbsUp, ThumbsDown, Share2, Save, User } from 'lucide-react';
import PropTypes from 'prop-types';
import { videos } from '../data/videos';

export function VideoPlayer({ video, onClose }) {
  const relatedVideos = videos.filter(v => v.id !== video.id).slice(0, 5);

  return (
    <div className="fixed inset-0 bg-[#0f0f0f] z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-4">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 md:hidden"
        >
          ✕
        </button>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src={video.videoUrl?.replace('watch?v=', 'embed/')}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl font-bold">{video.title}</h1>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 pb-4 border-b border-[#272727]">
                {/* Channel Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#272727] flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">{video.channel}</h3>
                    <p className="text-sm text-gray-400">1.2M subscribers</p>
                  </div>
                  <button className="ml-4 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200">
                    Subscribe
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <div className="flex bg-[#272727] rounded-full">
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#3d3d3d] rounded-l-full border-r border-[#3d3d3d]">
                      <ThumbsUp className="w-5 h-5" />
                      <span>123K</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#3d3d3d] rounded-r-full">
                      <ThumbsDown className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#272727] hover:bg-[#3d3d3d] rounded-full">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#272727] hover:bg-[#3d3d3d] rounded-full">
                    <Save className="w-5 h-5" />
                    <span>Save</span>
                  </button>
                </div>
              </div>

              {/* Video Description */}
              <div className="mt-4 p-3 bg-[#272727] rounded-xl">
                <div className="flex gap-4 text-sm text-gray-300 mb-2">
                  <span>{video.views}</span>
                  <span>{video.timestamp}</span>
                </div>
                <p className="text-sm whitespace-pre-line">{video.description}</p>
              </div>
            </div>
          </div>

          {/* Related Videos */}
          <div className="lg:w-[350px] space-y-4">
            {relatedVideos.map(relatedVideo => (
              <div 
                key={relatedVideo.id} 
                className="flex gap-2 cursor-pointer hover:bg-[#272727] p-2 rounded-xl"
                onClick={() => {
                  onClose();
                  setTimeout(() => window.location.reload(), 0);
                }}
              >
                <div className="relative w-40 flex-shrink-0">
                  <img
                    src={relatedVideo.thumbnail}
                    alt={relatedVideo.title}
                    className="w-full aspect-video object-cover rounded-xl"
                  />
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 px-2 py-1 rounded text-xs">
                    {relatedVideo.duration}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm line-clamp-2">{relatedVideo.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{relatedVideo.channel}</p>
                  <p className="text-xs text-gray-400">
                    {relatedVideo.views} • {relatedVideo.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

VideoPlayer.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
    onClose: PropTypes.func.isRequired,
  };