import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// This component handles both creation and update of a video.
export function VideoForm({ videos, onSave }) {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: '',
    title: '',
    videoUrl: '',
    channel: '',
    channelAvatar: '',
    views: '',
    timestamp: '',
    duration: '',
    description: '',
    likes: 0,
    dislikes: 0,
    comments: []
  });

  // If videoId exists, load video data from videos array.
  useEffect(() => {
    if (videoId) {
      const found = videos.find(v => v.id === videoId);
      if (found) setForm(found);
    }
  }, [videoId, videos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{ videoId ? 'Edit Video' : 'Add New Video' }</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full border p-2" />
        <input name="videoUrl" value={form.videoUrl} onChange={handleChange} placeholder="Video URL" className="w-full border p-2" />
        <input name="channel" value={form.channel} onChange={handleChange} placeholder="Channel" className="w-full border p-2" />
        <input name="channelAvatar" value={form.channelAvatar} onChange={handleChange} placeholder="Channel Avatar URL" className="w-full border p-2" />
        <input name="views" value={form.views} onChange={handleChange} placeholder="Views" className="w-full border p-2" />
        <input name="timestamp" value={form.timestamp} onChange={handleChange} placeholder="Timestamp" className="w-full border p-2" />
        <input name="duration" value={form.duration} onChange={handleChange} placeholder="Duration" className="w-full border p-2" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full border p-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {videoId ? 'Update Video' : 'Create Video'}
        </button>
      </form>
    </div>
  );
}
