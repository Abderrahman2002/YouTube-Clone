import  { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { VideoGrid } from './components/VideoGrid';
import { VideoPlayer } from './components/VideoPlayer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Header 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex pt-14">
        <Sidebar isOpen={isSidebarOpen} />
        <VideoGrid 
          isSidebarOpen={isSidebarOpen}
          onVideoClick={handleVideoClick}
        />
      </div>

      {selectedVideo && (
        <VideoPlayer 
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}

export default App;