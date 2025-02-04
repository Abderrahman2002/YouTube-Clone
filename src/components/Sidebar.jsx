import { Home, Compass, Clock, ThumbsUp, PlaySquare, ListVideo, History, Film, Gamepad, Newspaper, Trophy, Music2 } from 'lucide-react';
import { playlists } from '../data/videos';
import PropTypes from 'prop-types';

export function Sidebar({ isOpen }) {
  return (
    <aside className={`fixed left-0 top-14 h-full bg-[#0f0f0f] transition-all overflow-y-auto ${isOpen ? 'w-60' : 'w-20'}`}>
      <div className="p-2">
        <div className="mb-4">
          <button className="w-full flex items-center gap-4 px-3 py-2 bg-[#272727] rounded-lg">
            <Home className="w-6 h-6" />
            {isOpen && <span>Home</span>}
          </button>
          <button className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
            <Compass className="w-6 h-6" />
            {isOpen && <span>Explore</span>}
          </button>
          <button className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
            <ListVideo className="w-6 h-6" />
            {isOpen && <span>Subscriptions</span>}
          </button>
        </div>

        {isOpen && <hr className="border-[#272727] my-2" />}

        <div className="mb-4">
          <button className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
            <PlaySquare className="w-6 h-6" />
            {isOpen && <span>Library</span>}
          </button>
          <button className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
            <History className="w-6 h-6" />
            {isOpen && <span>History</span>}
          </button>
          <button className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
            <Clock className="w-6 h-6" />
            {isOpen && <span>Watch Later</span>}
          </button>
          <button className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
            <ThumbsUp className="w-6 h-6" />
            {isOpen && <span>Liked Videos</span>}
          </button>
        </div>

        {isOpen && (
          <>
            <hr className="border-[#272727] my-2" />
            
            <div className="mb-4">
              <h3 className="px-3 py-2 text-sm font-medium">Explore</h3>
              <button className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
                <Film className="w-6 h-6" />
                <span>Movies</span>
              </button>
              <button className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
                <Gamepad className="w-6 h-6" />
                <span>Gaming</span>
              </button>
              <button className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
                <Newspaper className="w-6 h-6" />
                <span>News</span>
              </button>
              <button className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
                <Trophy className="w-6 h-6" />
                <span>Sports</span>
              </button>
              <button className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg">
                <Music2 className="w-6 h-6" />
                <span>Music</span>
              </button>
            </div>

            <hr className="border-[#272727] my-2" />

            <div className="mb-4">
              <h3 className="px-3 py-2 text-sm font-medium">Playlists</h3>
              {playlists.map(playlist => (
                <button 
                  key={playlist.id}
                  className="w-full flex items-center gap-4 px-3 py-2 hover:bg-[#272727] rounded-lg"
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
}; 