import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Home, Compass, Clock, ThumbsUp, PlaySquare, ListVideo, History, Film, Gamepad, Newspaper, Trophy, Music2 } from 'lucide-react';
import { playlists } from '../data/videos';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';

export function Sidebar({ isOpen, onPlaylistClick, currentPath }) {
  const { isDarkMode } = useContext(ThemeContext);
  const [currentView, setCurrentView] = useState('');

  const onViewChange = (view) => {
    setCurrentView(view);
  };

  const handleViewClick = (view) => {
    onViewChange(view);
  };

  return (
    <aside className={`fixed left-0 top-14 h-full ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white'} transition-all overflow-y-auto ${isOpen ? 'w-60' : 'w-20'}`}>
      <div className="p-2">
        <div className="mb-4">
          <Link 
            to="/"
            onClick={() => handleViewClick('home')}
            className={`w-full flex items-center gap-4 px-3 py-2 ${currentView === 'home' ? (isDarkMode ? 'bg-[#272727]' : 'bg-gray-100') : ''} rounded-lg`}
          >
            <Home className="w-6 h-6" />
            {isOpen && <span>Home</span>}
          </Link>
          <Link 
            to="/explore"
            onClick={() => handleViewClick('explore')}
            className={`w-full flex items-center gap-4 px-3 py-2 ${currentView === 'explore' ? (isDarkMode ? 'bg-[#272727]' : 'bg-gray-100') : ''} hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}
          >
            <Compass className="w-6 h-6" />
            {isOpen && <span>Explore</span>}
          </Link>
          <Link 
            to="/subscriptions"
            onClick={() => handleViewClick('subscriptions')}
            className={`w-full flex items-center gap-4 px-3 py-2 ${currentView === 'subscriptions' ? (isDarkMode ? 'bg-[#272727]' : 'bg-gray-100') : ''} hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}
          >
            <ListVideo className="w-6 h-6" />
            {isOpen && <span>Subscriptions</span>}
          </Link>
        </div>

        {isOpen && <hr className={`border-${isDarkMode ? '[#272727]' : 'gray-200'} my-2`} />}

        <div className="mb-4">
          <Link to="/library" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
            <PlaySquare className="w-6 h-6" />
            {isOpen && <span>Library</span>}
          </Link>
          <Link to="/history" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
            <History className="w-6 h-6" />
            {isOpen && <span>History</span>}
          </Link>
          <Link to="/watch-later" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
            <Clock className="w-6 h-6" />
            {isOpen && <span>Watch Later</span>}
          </Link>
          <Link to="/liked-videos" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
            <ThumbsUp className="w-6 h-6" />
            {isOpen && <span>Liked Videos</span>}
          </Link>
        </div>

        {isOpen && (
          <>
            <hr className={`border-${isDarkMode ? '[#272727]' : 'gray-200'} my-2`} />
            
            <div className="mb-4">
              <h3 className="px-3 py-2 text-sm font-medium">Explore</h3>
              <Link to="/movies" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
                <Film className="w-6 h-6" />
                <span>Movies</span>
              </Link>
              <Link to="/gaming" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
                <Gamepad className="w-6 h-6" />
                <span>Gaming</span>
              </Link>
              <Link to="/news" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
                <Newspaper className="w-6 h-6" />
                <span>News</span>
              </Link>
              <Link to="/sports" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
                <Trophy className="w-6 h-6" />
                <span>Sports</span>
              </Link>
              <Link to="/music" className={`w-full flex items-center gap-4 px-3 py-2 hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}>
                <Music2 className="w-6 h-6" />
                <span>Music</span>
              </Link>
            </div>

            <hr className={`border-${isDarkMode ? '[#272727]' : 'gray-200'} my-2`} />

            <div className="mb-4">
              <h3 className="px-3 py-2 text-sm font-medium">Playlists</h3>
              {playlists.map(playlist => (
                <button 
                  key={playlist.id}
                  onClick={() => onPlaylistClick(playlist)}
                  className={`w-full flex items-center gap-4 px-3 py-2 ${
                    currentPath === `/playlist/${playlist.id}` 
                      ? (isDarkMode ? 'bg-[#272727]' : 'bg-gray-100') 
                      : ''
                  } hover:${isDarkMode ? 'bg-[#272727]' : 'bg-gray-100'} rounded-lg`}
                >
                  <div className="w-6 h-6 rounded overflow-hidden">
                    <img 
                      src={playlist.thumbnail} 
                      alt={playlist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>{playlist.name}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onPlaylistClick: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
};