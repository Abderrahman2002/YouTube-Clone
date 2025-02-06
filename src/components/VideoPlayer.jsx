import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../App';
import { ThumbsUp, ThumbsDown, Share2, Save, MoreVertical } from 'lucide-react';
import { videos } from '../data/videos';
import Header from '../components/Header'; // Adjust the path as necessary
import { Sidebar } from '../components/Sidebar'; // Adjust the path as necessary

VideoPlayer.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    channelAvatar: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    views: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onVideoChange: PropTypes.func.isRequired,
  onPlaylistClick: PropTypes.func.isRequired, // Add this prop
};

export function VideoPlayer({ video: initialVideo, onClose, onVideoChange, onPlaylistClick }) {
  const { isDarkMode } = useContext(ThemeContext);
  const [video, setVideo] = useState(initialVideo);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [likes, setLikes] = useState(video.likes);
  const [dislikes, setDislikes] = useState(video.dislikes);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar closed by default

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const relatedVideos = videos.filter(v => v.id !== video.id).slice(0, 5);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
      if (isDisliked) {
        setDislikes(dislikes - 1);
      }
    }
  };

  const handleDislike = () => {
    if (isDisliked) {
      setDislikes(dislikes - 1);
      setIsDisliked(false);
    } else {
      setDislikes(dislikes + 1);
      setIsDisliked(true);
      if (isLiked) {
        setLikes(likes - 1);
        setIsLiked(false);
      }
    }
  };

  const handleVideoChange = (newVideo) => {
    setVideo(newVideo);
    onVideoChange(newVideo);
    setIsLiked(false);
    setIsDisliked(false);
    setLikes(newVideo.likes);
    setDislikes(newVideo.dislikes);
    setShowMoreMenu(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`fixed inset-0 ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white'} z-50 overflow-y-auto`}>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onPlaylistClick={onPlaylistClick} currentPath="" />
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={onClose}
            className={`absolute top-4 right-4 ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} md:hidden`}
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
                  src={
                    video.videoUrl?.includes("youtu.be/")
                      ? video.videoUrl.replace("youtu.be/", "www.youtube.com/embed/")
                      : video.videoUrl?.replace(/(?:\?v=|&v=)/, "embed/")
                  }
                  title={video.title || "YouTube Video"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* Video Info */}
              <div className="mt-4">
                <h1 className="text-xl md:text-2xl font-bold">{video.title}</h1>
                {/* Channel Info and Action Buttons */}
                <div className={`flex flex-col md:flex-row md:items-center justify-between mt-4 pb-4 border-b ${isDarkMode ? 'border-[#272727]' : 'border-gray-200'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img 
                        src={video.channelAvatar} 
                        alt={video.channel}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{video.channel}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>1.2M subscribers</p>
                    </div>
                    <button className={`ml-4 px-4 py-2 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} rounded-full font-medium`}>
                      Subscribe
                    </button>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <div className={`flex ${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-full`}>
                      <button 
                        onClick={handleLike}
                        className={`flex items-center gap-2 px-4 py-2 ${isDarkMode ? 'hover:bg-[#3d3d3d]' : 'hover:bg-gray-200'} rounded-l-full border-r ${isDarkMode ? 'border-[#3d3d3d]' : 'border-gray-200'} ${isLiked ? 'text-blue-500' : ''}`}
                      >
                        <ThumbsUp className="w-5 h-5" />
                        <span>{likes.toLocaleString()}</span>
                      </button>
                      <button 
                        onClick={handleDislike}
                        className={`flex items-center gap-2 px-4 py-2 ${isDarkMode ? 'hover:bg-[#3d3d3d]' : 'hover:bg-gray-200'} rounded-r-full ${isDisliked ? 'text-blue-500' : ''}`}
                      >
                        <ThumbsDown className="w-5 h-5" />
                      </button>
                    </div>
                    <button className={`flex items-center gap-2 px-4 py-2 ${isDarkMode ? 'bg-[#272727] hover:bg-[#3d3d3d]' : 'bg-gray-100 hover:bg-gray-200'} rounded-full`}>
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                    <div className="relative">
                      <button 
                        onClick={() => setShowMoreMenu(!showMoreMenu)}
                        className={`flex items-center gap-2 px-4 py-2 ${isDarkMode ? 'bg-[#272727] hover:bg-[#3d3d3d]' : 'bg-gray-100 hover:bg-gray-200'} rounded-full`}
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>
                      {showMoreMenu && (
                        <div className={`absolute right-0 mt-2 w-48 ${isDarkMode ? 'bg-[#272727]' : 'bg-white'} rounded-lg shadow-lg py-2 z-10`}>
                          <button className={`w-full text-left px-4 py-2 ${isDarkMode ? 'hover:bg-[#3d3d3d]' : 'hover:bg-gray-100'} flex items-center gap-2`}>
                            <Save className="w-5 h-5" />
                            <span>Save to playlist</span>
                          </button>
                          {/* Add more menu items here */}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Video Description */}
                <div className={`mt-4 p-3 ${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-xl`}>
                  <div className={`flex gap-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                    <span>{video.views}</span>
                    <span>{video.timestamp}</span>
                  </div>
                  <p className="text-sm whitespace-pre-line">{video.description}</p>
                </div>
                {/* Comments Section */}
                <div className={`mt-4 p-3 ${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-xl`}>
                  <h2 className="text-lg font-semibold mb-2">Comments</h2>
                  {video.comments.map(comment => (
                    <div key={comment.id} className={`mb-2 p-2 ${isDarkMode ? 'bg-[#1f1f1f]' : 'bg-white'} rounded-lg`}>
                      <p className="font-medium">{comment.user}</p>
                      <p className="text-sm">{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Related Videos */}
            <div className="lg:w-[350px] space-y-4">
              {relatedVideos.map(relatedVideo => (
                <div 
                  key={relatedVideo.id} 
                  className={`flex gap-2 cursor-pointer ${isDarkMode ? 'hover:bg-[#272727]' : 'hover:bg-gray-100'} p-2 rounded-xl`}
                  onClick={() => handleVideoChange(relatedVideo)}
                >
                  <div className="relative w-40 flex-shrink-0">
                    <img
                      src={relatedVideo.thumbnail}
                      alt={relatedVideo.title}
                      className="w-full aspect-video object-cover rounded-xl"
                    />
                    <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 px-2 py-1 rounded text-xs text-white">
                      {relatedVideo.duration}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm line-clamp-2">{relatedVideo.title}</h3>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{relatedVideo.channel}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {relatedVideo.views} • {relatedVideo.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}