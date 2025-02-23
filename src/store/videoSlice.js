import { createSlice } from '@reduxjs/toolkit';
import { videos as initialVideos, playlists as initialPlaylists } from '../data/videos';

const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    videos: initialVideos,
    playlists: initialPlaylists,
  },
  reducers: {
    addVideo: (state, action) => {
      state.videos.push({ ...action.payload, id: (state.videos.length + 1).toString() });
    },
    updateVideo: (state, action) => {
      const index = state.videos.findIndex(v => v.id === action.payload.id);
      if (index >= 0) state.videos[index] = action.payload;
    },
    likeVideo: (state, action) => {
      const video = state.videos.find(v => v.id === action.payload.id);
      if (video) {
        video.likes += 1;
        const likedPlaylist = state.playlists.find(p => p.name === "Liked Videos");
        if (!likedPlaylist.videos.find(v => v.id === video.id)) {
          likedPlaylist.videos.push(video);
          likedPlaylist.videoCount = likedPlaylist.videos.length;
          likedPlaylist.thumbnail = likedPlaylist.videos.length > 0 ? likedPlaylist.videos[0].thumbnail : "";
        }
      }
    },
    unlikeVideo: (state, action) => {
      const video = state.videos.find(v => v.id === action.payload.id);
      if (video) {
        video.likes -= 1;
        const likedPlaylist = state.playlists.find(p => p.name === "Liked Videos");
        likedPlaylist.videos = likedPlaylist.videos.filter(v => v.id !== video.id);
        likedPlaylist.videoCount = likedPlaylist.videos.length;
        likedPlaylist.thumbnail = likedPlaylist.videos.length > 0 ? likedPlaylist.videos[0].thumbnail : "";
      }
    }
  }
});

export const { addVideo, updateVideo, likeVideo, unlikeVideo } = videoSlice.actions;
export default videoSlice.reducer;
